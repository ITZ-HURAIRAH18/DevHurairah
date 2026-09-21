import { escapeHtml, toMultilineHtml } from "./sanitize.js";

const BRAND_NAME = "ABU HURAIRAH";
const BRAND_ACCENT = "HURAIRAH";
const OWNER_NAME = "Muhammad Abu Hurairah";
const OWNER_TITLE = "Full-Stack Developer";
const DOMAIN = "abuhurairah.engineer";

function brandHeaderHtml() {
  return `
    <tr>
      <td align="center" style="padding: 28px 24px 20px 24px;">
        <div style="font-family: 'Courier New', monospace; font-size: 22px; font-weight: 700; color: #2D1B0E; letter-spacing: 0.04em;">
          ${BRAND_NAME.replace(BRAND_ACCENT, `<span style="font-family: Georgia, serif; font-style: italic; font-weight: normal; color: #8B5E3C;">${BRAND_ACCENT}</span>`)}
        </div>
        <div style="font-family: 'Courier New', monospace; font-size: 11px; color: #C49A6C; letter-spacing: 0.18em; text-transform: uppercase; margin-top: 4px;">
          ${DOMAIN}
        </div>
        <div style="width: 56px; height: 3px; margin: 14px auto 0 auto; background: #8B5E3C; border-radius: 2px;"></div>
      </td>
    </tr>
  `;
}

function brandFooterHtml() {
  return `
    <tr>
      <td align="center" style="padding: 18px 24px 28px 24px;">
        <div style="font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.14em; color: #8A7560; text-transform: uppercase;">
          <a href="https://github.com/itz-hurairah18" target="_blank" style="color: #8B5E3C; text-decoration: underline; text-underline-offset: 3px;">GitHub</a>
          <span style="color: #E8DDD0;">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/" target="_blank" style="color: #8B5E3C; text-decoration: underline; text-underline-offset: 3px;">LinkedIn</a>
          <span style="color: #E8DDD0;">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="https://wa.me/923116085400" target="_blank" style="color: #8B5E3C; text-decoration: underline; text-underline-offset: 3px;">WhatsApp</a>
        </div>
        <div style="font-family: 'Courier New', monospace; font-size: 10px; color: #8A7560; margin-top: 12px; line-height: 1.6;">
          &copy; ${new Date().getFullYear()} Muhammad Abu Hurairah. All rights reserved.<br />
          Portfolio: <a href="https://${DOMAIN}" target="_blank" style="color: #8B5E3C;">${DOMAIN}</a>
        </div>
      </td>
    </tr>
  `;
}

const EMAIL_WRAPPER_START = `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${DOMAIN}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F7F3EC; -webkit-text-size-adjust: 100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F7F3EC; padding: 24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; background-color: #FFF8F0; border: 1px solid #E8DDD0; border-radius: 16px; overflow: hidden;">
`;

const EMAIL_WRAPPER_END = `
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

export function ownerNotificationEmail({ name, email, subject, message, receivedFrom, sentAt }) {
  const dateTimeText = sentAt
    ? new Date(sentAt).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })
    : "";

  return `${EMAIL_WRAPPER_START}
    ${brandHeaderHtml()}
    <tr>
      <td style="padding: 8px 32px 24px 32px;">
        <div style="display: inline-block; font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #FFFFFF; background: #8B5E3C; border-radius: 999px; padding: 6px 14px; font-weight: 700;">
          New Portfolio Contact
        </div>
        <h1 style="margin: 18px 0 4px 0; font-family: Georgia, serif; font-size: 24px; color: #2D1B0E; line-height: 1.25;">
          ${escapeHtml(subject)}
        </h1>
        <div style="width: 48px; height: 3px; background: #C49A6C; border-radius: 2px; margin: 10px 0 22px 0;"></div>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif;">
          <tr>
            <td style="width: 120px; padding: 8px 0; font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7560; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-size: 14px; color: #2D1B0E; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7560; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; font-size: 14px; color: #8B5E3C;">
              <a href="mailto:${escapeHtml(email)}" target="_blank" style="color: #8B5E3C; text-decoration: underline; text-underline-offset: 3px;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7560; vertical-align: top;">Subject</td>
            <td style="padding: 8px 0; font-size: 14px; color: #2D1B0E; font-weight: 600;">${escapeHtml(subject)}</td>
          </tr>
        </table>

        <div style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7560; margin-top: 14px; margin-bottom: 8px;">Message</div>
        <div style="background: #FAF7F2; border-left: 4px solid #8B5E3C; border-radius: 8px; padding: 16px 18px; margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #5C4033; line-height: 1.65;">
          ${toMultilineHtml(message)}
        </div>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #F7F3EC; border: 1px solid #E8DDD0; border-radius: 10px; font-family: Arial, Helvetica, sans-serif;">
          <tr>
            <td style="padding: 12px 16px; font-size: 12px; color: #5C4033;">
              <strong style="color: #2D1B0E;">Reply-to:</strong> <a href="mailto:${escapeHtml(email)}" target="_blank" style="color: #8B5E3C;">${escapeHtml(email)}</a>
              <span style="color: #8A7560;">— hit Reply to answer the visitor directly.</span>
            </td>
          </tr>
        </table>

        <div style="font-family: 'Courier New', monospace; font-size: 10px; color: #8A7560; margin-top: 20px; line-height: 1.8;">
          <span style="color: #C49A6C;">Received from:</span> abuhurairah.engineer<br />
          <span style="color: #C49A6C;">Date / Time:</span> ${escapeHtml(dateTimeText)}
        </div>
      </td>
    </tr>
    ${brandFooterHtml()}
  ${EMAIL_WRAPPER_END}`;
}

export function visitorConfirmationEmail({ name, subject }) {
  return `${EMAIL_WRAPPER_START}
    ${brandHeaderHtml()}
    <tr>
      <td style="padding: 8px 32px 24px 32px;">
        <h1 style="margin: 0 0 18px 0; font-family: Georgia, serif; font-size: 24px; color: #2D1B0E; line-height: 1.25;">
          Hello ${escapeHtml(name)},
        </h1>

        <p style="margin: 0 0 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #5C4033; line-height: 1.7;">
          Thank you for reaching out through my portfolio.
        </p>

        <div style="background: #FAF7F2; border: 1px solid #E8DDD0; border-left: 4px solid #8B5E3C; border-radius: 10px; padding: 18px 20px; margin: 0 0 18px 0;">
          <div style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #8A7560; margin-bottom: 6px;">
            Message received regarding
          </div>
          <div style="font-family: Georgia, serif; font-style: italic; font-size: 17px; color: #2D1B0E;">
            &ldquo;${escapeHtml(subject)}&rdquo;
          </div>
        </div>

        <p style="margin: 0 0 14px 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #5C4033; line-height: 1.7;">
          I have successfully received your message and will review it and get back to you as soon as possible.
        </p>

        <p style="margin: 0 0 26px 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #5C4033; line-height: 1.7;">
          I appreciate you taking the time to contact me.
        </p>

        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #2D1B0E; line-height: 1.6;">
          Best regards,
        </div>
        <div style="margin-top: 12px;">
          <div style="font-family: Georgia, serif; font-size: 18px; font-weight: 700; color: #2D1B0E;">
            Muhammad Abu <span style="font-style: italic; font-weight: normal; color: #8B5E3C;">Hurairah</span>
          </div>
          <div style="font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.08em; color: #8A7560; margin-top: 2px;">
            ${OWNER_TITLE.toUpperCase()}
          </div>
        </div>

        <div style="margin-top: 22px; padding-top: 18px; border-top: 1px solid #E8DDD0;">
          <div style="font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.12em; color: #8A7560;">
            Portfolio — <a href="https://${DOMAIN}" target="_blank" style="color: #8B5E3C; text-decoration: underline; text-underline-offset: 3px;">${DOMAIN}</a>
          </div>
        </div>
      </td>
    </tr>
    ${brandFooterHtml()}
  ${EMAIL_WRAPPER_END}`;
}