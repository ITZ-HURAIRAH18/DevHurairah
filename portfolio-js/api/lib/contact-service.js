import { Resend } from "resend";
import { isEmailValid } from "./sanitize.js";
import { ownerNotificationEmail, visitorConfirmationEmail } from "./email-templates.js";

const NAME_MAX = 120;
const EMAIL_MAX = 254;
const SUBJECT_MAX = 200;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 5000;
const WHATSAPP_MAX = 20;
const WHATSAPP_PATTERN = /^\+?[0-9()\-\s]{7,20}$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const HONEYPOT_FIELD = "website";
const TIMESTAMP_FIELD = "timestamp";
const MIN_FORM_TIME_MS = 2000;

const attemptLog = new Map();

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

function getFromAddress() {
  const fromName = process.env.RESEND_FROM_NAME || "Muhammad Abu Hurairah";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "contact@abuhurairah.engineer";
  return `${fromName} <${fromEmail}>`;
}

function getContactEmail() {
  return process.env.CONTACT_EMAIL || "muhammadabuhurairah22@gmail.com";
}

function safeErrorInfo(error) {
  if (!error) return "";
  return `${error.name || "Error"}${error.statusCode ? ` (status ${error.statusCode})` : ""}`;
}

export function validateContact(payload) {
  const source = payload && typeof payload === "object" ? payload : {};

  const name = typeof source.name === "string" ? source.name.trim() : "";
  const email = typeof source.email === "string" ? source.email.trim() : "";
  const subject = typeof source.subject === "string" ? source.subject.trim() : "";
  const message = typeof source.message === "string" ? source.message.trim() : "";
  const whatsapp = typeof source.whatsapp === "string" ? source.whatsapp.trim() : "";

  const errors = [];

  if (!name || !email || !subject || !message) {
    errors.push("Please complete all required fields.");
  }

  if (name && name.length > NAME_MAX) {
    errors.push("Please enter a shorter name.");
  }

  if (email && (!isEmailValid(email) || email.length > EMAIL_MAX)) {
    errors.push("Please enter a valid email address.");
  }

  if (subject && subject.length > SUBJECT_MAX) {
    errors.push("Please enter a shorter subject.");
  }

  if (message) {
    if (message.length < MESSAGE_MIN) {
      errors.push("Please enter a longer message.");
    } else if (message.length > MESSAGE_MAX) {
      errors.push("Please enter a shorter message.");
    }
  }

  if (whatsapp && (!WHATSAPP_PATTERN.test(whatsapp) || whatsapp.length > WHATSAPP_MAX)) {
    errors.push("Please enter a valid WhatsApp number.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: { name, email, subject, message, whatsapp },
  };
}

export function isSpam(payload) {
  const source = payload && typeof payload === "object" ? payload : {};

  const honeypot = typeof source[HONEYPOT_FIELD] === "string" ? source[HONEYPOT_FIELD].trim() : "";
  if (honeypot) return true;

  const timestamp = Number(source[TIMESTAMP_FIELD]);
  if (Number.isFinite(timestamp) && timestamp > 0) {
    const elapsed = Date.now() - timestamp;
    if (elapsed < MIN_FORM_TIME_MS) return true;
  }

  return false;
}

export function trackRequest(identifier) {
  const key = identifier || "unknown";
  const now = Date.now();

  const recent = (attemptLog.get(key) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    attemptLog.set(key, recent);
    return true;
  }

  recent.push(now);
  attemptLog.set(key, recent);
  return false;
}

export async function sendContactEmails({ name, email, subject, message, whatsapp }) {
  const from = getFromAddress();
  const contactEmail = getContactEmail();
  const resend = getResend();

  const ownerHtml = ownerNotificationEmail({
    name,
    email,
    subject,
    message,
    whatsapp,
    receivedFrom: "abuhurairah.engineer",
    sentAt: new Date(),
  });

  const { error: ownerError } = await resend.emails.send({
    from,
    to: [contactEmail],
    replyTo: email,
    subject: `New Portfolio Contact: ${subject}`,
    html: ownerHtml,
  });

  if (ownerError) {
    console.error(`[contact] Owner notification email failed (${safeErrorInfo(ownerError)})`);
    return { ownerOk: false, visitorOk: false };
  }

  let visitorOk = true;
  try {
    const visitorHtml = visitorConfirmationEmail({ name, subject });
    const { error: visitorError } = await resend.emails.send({
      from,
      to: [email],
      subject: "Thanks for contacting Muhammad Abu Hurairah",
      html: visitorHtml,
    });
    if (visitorError) {
      visitorOk = false;
      console.error(`[contact] Visitor confirmation email failed (${safeErrorInfo(visitorError)})`);
    }
  } catch (error) {
    visitorOk = false;
    console.error(`[contact] Visitor confirmation email threw (${safeErrorInfo(error)})`);
  }

  return { ownerOk: true, visitorOk };
}