import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const gmailUser = process.env.GMAIL_USER || "abuhurx@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD || "vtwd tegp bbhz epzv";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: gmailUser,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FFF8F0; border: 1px solid #E8DDD0; border-radius: 12px;">
          <h2 style="color: #8B5E3C; margin-top: 0;">New Portfolio Message</h2>
          <hr style="border: none; height: 1px; background: #E8DDD0; margin: 16px 0;" />
          <p style="color: #2D1B0E; font-size: 14px;"><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p style="color: #2D1B0E; font-size: 14px;"><strong>Message:</strong></p>
          <blockquote style="background: #FAF7F2; padding: 16px; border-left: 4px solid #8B5E3C; margin: 0; color: #5C4033; font-size: 14px; line-height: 1.6;">
            ${message}
          </blockquote>
          <hr style="border: none; height: 1px; background: #E8DDD0; margin: 24px 0 12px 0;" />
          <p style="color: #8A7560; font-size: 12px;">
            Sent from your portfolio website (abuhurairah.engineer).
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send message: " + (error.message || "Unknown error") });
  }
}
