/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["'Plus Jakarta Sans'", "'Space Grotesk'", "system-ui", "sans-serif"],
      heading: ["'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
      serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      mono: ["'Space Mono'", "monospace"],
    },
    extend: {
      colors: {
        page: "#FAF7F2",
        card: "#FFF8F0",
        espresso: "#2D1B0E",
        copper: "#8B5E3C",
        tan: "#C49A6C",
        body: "#5C4033",
        muted: "#8A7560",
        border: "#E8DDD0",
      },
      fontSize: {
        "editorial": ["90px", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "watermark": ["200px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "mono-tiny": ["10px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "mono-xs": ["11px", { lineHeight: "1.4", letterSpacing: "0.06em" }],
        "mono-sm": ["12px", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.2)" },
        },
        "mesh": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        }
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 45s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "mesh": "mesh 12s ease-in-out infinite alternate",
      },
      borderWidth: {
        "section": "1px",
      },
      boxShadow: {
        "warm": "0 10px 30px -5px rgba(45, 27, 14, 0.06), 0 4px 12px -2px rgba(139, 94, 60, 0.04)",
        "warm-hover": "0 22px 45px -10px rgba(45, 27, 14, 0.14), 0 8px 24px -4px rgba(139, 94, 60, 0.12)",
      }
    },
  },
  plugins: [],
}
