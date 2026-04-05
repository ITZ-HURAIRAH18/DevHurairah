import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const move = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX + "px";
          cursorRef.current.style.top = e.clientY + "px";
        }
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#A0714F",
        pointerEvents: "none",
        zIndex: 9997,
        transform: "translate(-50%, -50%)",
        transition: "left 0.08s ease, top 0.08s ease",
        opacity: 0.7,
      }}
    />
  );
};

export default CustomCursor;
