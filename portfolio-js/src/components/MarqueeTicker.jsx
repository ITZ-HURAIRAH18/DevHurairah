const MarqueeTicker = () => {
  const tickerItems = [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Django",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Open to Remote",
    "Pakistan"
  ];

  const renderTickerElements = () => (
    <>
      {tickerItems.map((item, idx) => (
        <span key={idx} className="inline-flex items-center">
          <span className="text-page font-sans text-[10px] uppercase tracking-[0.2em] font-medium mx-6">
            {item}
          </span>
          <span className="text-copper text-sm">↗</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-espresso overflow-hidden h-8 flex items-center border-b border-copper/10">
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
