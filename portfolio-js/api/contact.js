import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A0714F;">New Contact Message</h2>
          <hr style="border: none; height: 1px; background: #A0714F; opacity: 0.2;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f5f5f5; padding: 1rem; border-left: 4px solid #A0714F; margin: 0;">
            ${message}
          </blockquote>
          <hr style="border: none; height: 1px; background: #A0714F; opacity: 0.2; margin-top: 2rem;" />
          <p style="color: #666; font-size: 0.8rem;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
