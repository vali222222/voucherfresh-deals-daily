import { Ticket } from "lucide-react";
import { useState, useEffect } from "react";

export const VoucherHeader = () => {
  const [activeCount, setActiveCount] = useState(2854);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCount = Math.floor(Math.random() * (3000 - 2800 + 1)) + 2800;
      setActiveCount(randomCount);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end min-h-[35vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/25"></div>
      
      {/* Background decorative animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-8 text-white/30 text-lg animate-twinkle" style={{ animationDelay: "0s" }}>⭐</div>
        <div className="absolute top-16 right-12 text-white/20 text-sm animate-twinkle" style={{ animationDelay: "0.5s" }}>✨</div>
        <div className="absolute bottom-16 right-6 text-white/25 text-xl animate-twinkle" style={{ animationDelay: "1s" }}>⭐</div>
        <div className="absolute top-1/3 left-16 text-white/20 text-xs animate-twinkle" style={{ animationDelay: "1.5s" }}>✨</div>
        <div className="absolute bottom-1/3 left-6 text-white/30 text-sm animate-twinkle" style={{ animationDelay: "2s" }}>⭐</div>
        <div className="absolute top-20 left-1/2 text-white/15 text-xs animate-twinkle" style={{ animationDelay: "0.3s" }}>✨</div>
        <div className="absolute bottom-20 left-1/3 text-white/25 text-sm animate-twinkle" style={{ animationDelay: "1.2s" }}>⭐</div>
        <div className="absolute top-1/4 right-8 text-white/20 text-lg animate-twinkle" style={{ animationDelay: "0.8s" }}>✨</div>
      </div>

      {/* Logo and title */}
      <div className="relative z-10 text-center mb-6">
        <div className="mb-4 inline-block">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-accent to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
            <Ticket className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-orange-accent mb-1 tracking-tight">
          VoucherFresh
        </h1>
        
        <p className="text-sm text-white/90 font-medium mb-6">
          Premium Deals • Verified Daily
        </p>

        {/* Status badges - lado a lado */}
        <div className="flex gap-3 justify-center items-center">
          <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-badge-green-text rounded-full"></div>
              <span className="text-badge-green-text font-semibold text-sm">{activeCount.toLocaleString()} Active</span>
            </div>
          </div>
          
          <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-accent rounded-full"></div>
              <span className="text-orange-accent font-semibold text-sm">98% Success</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};