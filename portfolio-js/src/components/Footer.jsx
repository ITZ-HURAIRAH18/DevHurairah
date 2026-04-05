const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "static",
        width: "100%",
        zIndex: 1,
        background: "#1C1007",
        padding: "1.25rem 3rem",
        borderTop: "1px solid rgba(247,243,236,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Left: Copyright */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.62rem",
            color: "#F7F3EC",
            opacity: 0.3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          &copy; {currentYear} MUHAMMAD ABU HURAIRAH. ALL RIGHTS RESERVED.
        </div>

        {/* Right: Domain name */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem",
            fontStyle: "italic",
            color: "#A0714F",
          }}
        >
          abuhurairah.engineer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
