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

        {/* Center: Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a
            href="https://github.com/itz-hurairah18"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(247,243,236,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#A0714F")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(247,243,236,0.6)")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(247,243,236,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#A0714F")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(247,243,236,0.6)")}
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Domain name */}
        <a
          href="http://abuhurairah.engineer/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem",
            fontStyle: "italic",
            color: "#A0714F",
            textDecoration: "none",
          }}
        >
          abuhurairah.engineer
        </a>
      </div>
    </footer>
  );
};

export default Footer;
