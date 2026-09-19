import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#2D1B0E] flex flex-col items-center justify-between p-8 sm:p-12 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Header Label */}
      <div className="w-full flex items-center justify-between text-[#C49A6C] font-mono text-xs uppercase tracking-widest pt-2">
        <span>ATELIER HURAIRAH</span>
        <span>PORTFOLIO v2.0</span>
      </div>

      {/* Center Branding & Progress */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 my-auto">
        <div className="space-y-2">
          <p className="font-mono text-xs text-[#C49A6C] uppercase tracking-widest">
            Software & AI Systems Engineer
          </p>
          <h1 className="font-serif italic font-normal text-4xl sm:text-6xl text-[#FFF8F0] tracking-tight">
            Abu <span className="gradient-text not-italic font-heading font-extrabold">Hurairah</span>
          </h1>
        </div>

        {/* Progress Bar & Percentage Counter */}
        <div className="w-64 sm:w-80 space-y-3 pt-4">
          <div className="w-full h-[2px] bg-[#E8DDD0]/20 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#8B5E3C] to-[#C49A6C] transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#C49A6C]">
            <span>LOADING ARCHITECTURE</span>
            <span className="font-bold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="w-full text-center font-mono text-[10px] text-[#E8DDD0]/40 uppercase tracking-widest pb-2">
        ✦ CRAFTED WITH PRECISION & ELEGANCE ✦
      </div>
    </div>
  );
};

export default Preloader;
