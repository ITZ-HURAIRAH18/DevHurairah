const MarqueeTicker = () => {
  const tickerItems = [
    "Full-Stack Developer",
    "AI Automation Engineer",
    "n8n Workflow Specialist",
    "React & Next.js",
    "Python & Django",
    "FastAPI & Node.js",
    "LLM Agents & RAG",
    "Available for Remote Projects",
  ];

  const renderTickerElements = () => (
    <>
      {tickerItems.map((item, idx) => (
        <span key={idx} className="inline-flex items-center">
          <span className="text-[#FFF8F0] font-mono text-xs uppercase tracking-widest font-semibold mx-6">
            {item}
          </span>
          <span className="text-[#C49A6C] text-xs font-bold">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-gradient-to-r from-[#2D1B0E] via-[#8B5E3C] to-[#2D1B0E] border-b border-[#E8DDD0]/20 h-10 flex items-center overflow-hidden shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center">
          {renderTickerElements()}
        </div>
        <div className="flex items-center">
          {renderTickerElements()}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTicker;
