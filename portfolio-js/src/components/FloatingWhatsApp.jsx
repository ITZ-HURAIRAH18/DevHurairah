import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.a
      href="https://wa.me/923116085400"
      target="_blank"
      rel="noopener noreferrer"
      animate={floatingAnimation}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "1rem",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(160, 113, 79, 0.9) 0%, rgba(160, 113, 79, 1) 100%)",
        border: "2px solid rgba(160, 113, 79, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 999,
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(160, 113, 79, 0.3)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.15)";
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(160, 113, 79, 0.4)";
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(160, 113, 79, 1) 0%, rgba(160, 113, 79, 0.9) 100%)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(160, 113, 79, 0.3)";
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(160, 113, 79, 0.9) 0%, rgba(160, 113, 79, 1) 100%)";
      }}
      title="Chat with us on WhatsApp - 0311 6085 400"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F7F3EC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;
