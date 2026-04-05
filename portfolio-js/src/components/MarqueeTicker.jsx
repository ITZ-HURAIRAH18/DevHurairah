const MarqueeTicker = () => {
  const tickerContent = (
    <>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Full-Stack Engineer</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">React</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Next.js</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Django</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Node.js</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">MongoDB</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">TypeScript</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Open to Remote</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
      <span className="inline-flex items-center mx-6">
        <span className="text-page font-mono text-mono-tiny uppercase tracking-wider">Pakistan</span>
      </span>
      <span className="text-copper text-lg mx-2">↗</span>
    </>
  );

  return (
    <div className="w-full bg-espresso overflow-hidden h-8 flex items-center">
      <div className="marquee-track">
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
};

export default MarqueeTicker;
