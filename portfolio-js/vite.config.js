import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import nodemailer from "nodemailer"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, message } = data;

                  if (!name || !email || !message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "All fields are required" }));
                  }

                  const gmailUser = env.GMAIL_USER || process.env.GMAIL_USER || "abuhurx@gmail.com";
                  const gmailPass = env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD || "vtwd tegp bbhz epzv";

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

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ success: true }));
                } catch (err) {
                  console.error("Vite API Middleware Email Error:", err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ error: "Failed to send email: " + (err.message || "Unknown error") }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
