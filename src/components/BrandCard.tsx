
import { Tag, Users, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    OGAds?: any;
    ogads?: any;
    OGADS?: any;
  }
}

interface BrandCardProps {
  logo: string;
  brand: string;
  offer: string;
  usedToday: number;
  timeLeft: number;
}

export const BrandCard = ({ logo, brand, offer, usedToday, timeLeft }: BrandCardProps) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [codeRevealed, setCodeRevealed] = useState(false);
  const captchaMountRef = useRef<HTMLDivElement | null>(null);

  // Montează captcha când e cerută
  useEffect(() => {
    if (!showCaptcha || !captchaMountRef.current) return;

    // Golim tot
    captchaMountRef.current.innerHTML = "";

    // Creăm mount nou
    const mount = document.createElement("div");
    mount.setAttribute("data-captcha-enable", "true");
    captchaMountRef.current.appendChild(mount);

    // Nudge pentru scanare
    setTimeout(() => {
      try {
        const api = window.OGAds || window.ogads || window.OGADS;
        api?.init?.();
        api?.scan?.();
      } catch {}
      window.dispatchEvent(new Event("load"));
      document.dispatchEvent(new Event("DOMContentLoaded"));
    }, 40);
  }, [showCaptcha]);

  return (
    <div className="bg-[#212532] border border-gray-600/50 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-neon-green/30 ring-1 ring-gray-500/20">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <img 
            src={logo} 
            alt={`${brand} logo`} 
            className="w-10 h-10 object-contain"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground mb-1">{brand}</h3>
          <p className="text-sm text-muted-foreground font-medium leading-snug">
            {offer}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{usedToday} used today</span>
        </div>
        
        <div className="px-2.5 py-1 bg-badge-orange/20 border border-orange-accent/20 rounded-full">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-orange-accent" />
            <span className="text-orange-accent text-xs font-semibold">
              {timeLeft} left
            </span>
          </div>
        </div>
      </div>

      {!showCaptcha ? (
        <button 
          onClick={() => {
            setShowCaptcha(true);
            setCodeRevealed(true);
          }}
          className="w-full bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] shadow-neon-green/20"
        >
          <Tag className="w-4 h-4" />
          <span className="text-sm">Get Coupon Code</span>
        </button>
      ) : (
        <div className="captcha-container mt-4">
          <div
            ref={captchaMountRef}
            className="w-full min-h-[360px] pointer-events-auto bg-[#1a1c24] rounded-xl border border-gray-600/50"
            style={{ position: "relative" }}
          />
        </div>
      )}
    </div>
  );
};
