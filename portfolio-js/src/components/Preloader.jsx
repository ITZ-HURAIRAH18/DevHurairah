import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#1C1007",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        animation: "fadeOut 0.4s 0.9s ease forwards",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#F7F3EC",
            fontWeight: 300,
            animation: "logoReveal 0.6s ease forwards",
          }}
        >
          <span style={{ color: "#A0714F" }}>M.</span> Abu Hurairah
        </div>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#A0714F",
            margin: "1rem auto 0",
            animation: "expandLine 0.8s 0.3s ease forwards",
            transformOrigin: "left",
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
