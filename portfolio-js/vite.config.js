import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import {
  validateContact,
  isSpam,
  trackRequest,
  sendContactEmails,
} from "./api/lib/contact-service.js"

const MISSING_FIELDS_MESSAGE = "Please complete all required fields."
const INVALID_EMAIL_MESSAGE = "Please enter a valid email address."
const GENERIC_FAILURE_MESSAGE = "Unable to send your message right now. Please try again later."

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }

  const respond = (res, statusCode, body) => {
    res.statusCode = statusCode
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = ''
              req.on('data', (chunk) => { body += chunk })
              req.on('end', async () => {
                let payload = {}
                try {
                  payload = JSON.parse(body || '{}')
                } catch {
                  return respond(res, 400, { success: false, message: MISSING_FIELDS_MESSAGE })
                }

                const ip = req.socket?.remoteAddress || 'unknown'
                if (trackRequest(ip)) {
                  return respond(res, 429, { success: false, message: GENERIC_FAILURE_MESSAGE })
                }

                if (isSpam(payload)) {
                  return respond(res, 200, { success: true, message: 'Message sent successfully.' })
                }

                const { valid, errors, data } = validateContact(payload)
                if (!valid) {
                  let message = errors[0] || MISSING_FIELDS_MESSAGE
                  if (errors.some((e) => e === MISSING_FIELDS_MESSAGE)) {
                    message = MISSING_FIELDS_MESSAGE
                  } else if (errors.some((e) => e === INVALID_EMAIL_MESSAGE)) {
                    message = INVALID_EMAIL_MESSAGE
                  }
                  return respond(res, 400, { success: false, message })
                }

                try {
                  const result = await sendContactEmails(data)
                  if (!result.ownerOk) {
                    return respond(res, 500, { success: false, message: GENERIC_FAILURE_MESSAGE })
                  }
                  return respond(res, 200, { success: true, message: 'Message sent successfully.' })
                } catch (err) {
                  console.error('Vite API Middleware Email Error:', err?.name, err?.statusCode)
                  return respond(res, 500, { success: false, message: GENERIC_FAILURE_MESSAGE })
                }
              })
              return
            }
            next()
          })
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})