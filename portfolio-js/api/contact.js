import {
  validateContact,
  isSpam,
  trackRequest,
  sendContactEmails,
} from "./lib/contact-service.js";

const MISSING_FIELDS_MESSAGE = "Please complete all required fields.";
const INVALID_EMAIL_MESSAGE = "Please enter a valid email address.";
const GENERIC_FAILURE_MESSAGE = "Unable to send your message right now. Please try again later.";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  let payload = null;
  try {
    payload =
      typeof req.body === "object" && req.body !== null ? req.body : JSON.parse(req.body || "{}");
  } catch {
    return res.status(400).json({ success: false, message: MISSING_FIELDS_MESSAGE });
  }

  const ip = String(
    (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0]
  ).trim();

  if (trackRequest(ip)) {
    return res.status(429).json({ success: false, message: GENERIC_FAILURE_MESSAGE });
  }

  if (isSpam(payload)) {
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  }

  const { valid, errors, data } = validateContact(payload);
  if (!valid) {
    let message = errors[0] || MISSING_FIELDS_MESSAGE;
    if (errors.some((e) => e === MISSING_FIELDS_MESSAGE)) {
      message = MISSING_FIELDS_MESSAGE;
    } else if (errors.some((e) => e === INVALID_EMAIL_MESSAGE)) {
      message = INVALID_EMAIL_MESSAGE;
    }
    return res.status(400).json({ success: false, message });
  }

  try {
    const result = await sendContactEmails(data);
    if (!result.ownerOk) {
      return res.status(500).json({ success: false, message: GENERIC_FAILURE_MESSAGE });
    }
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("[contact] Unexpected error with name and status:", error?.name, error?.statusCode);
    return res.status(500).json({ success: false, message: GENERIC_FAILURE_MESSAGE });
  }
}