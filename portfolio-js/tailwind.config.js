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
      serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
      mono: ["'Space Mono'", "monospace"],
    },
    extend: {
      colors: {
        page: "#F7F3EC",
        card: "#E8DED0",
        espresso: "#1C1007",
        copper: "#A0714F",
        muted: "#8A7560",
        border: "rgba(28,16,7,0.10)",
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
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 45s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      borderWidth: {
        "section": "1px",
      },
    },
  },
  plugins: [],
}
