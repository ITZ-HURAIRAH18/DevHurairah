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
        bottom: "3rem",
        right: "2rem",
        width: "64px",
        height: "64px",
        borderRadius: "20px",
        background: "#1C1007",
        border: "1px solid rgba(160, 113, 79, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 999,
        textDecoration: "none",
        boxShadow: "0 12px 36px rgba(28, 16, 7, 0.4)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1) translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 45px rgba(28, 16, 7, 0.5)";
        e.currentTarget.style.background = "#A0714F";
        e.currentTarget.style.borderColor = "rgba(28, 16, 7, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(28, 16, 7, 0.4)";
        e.currentTarget.style.background = "#1C1007";
        e.currentTarget.style.borderColor = "rgba(160, 113, 79, 0.3)";
      }}
      title="Chat with us on WhatsApp - 0311 6085 400"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.12.553 4.189 1.601 6.01L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.049-5.415 12.052-12.05a11.817 11.817 0 00-3.511-8.502z"
          fill="#F7F3EC"
        />
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;
