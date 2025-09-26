
import { Tag, Users, Clock, ChevronDown, Share2, CheckCircle, Info } from "lucide-react";
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
  const [showFAQ, setShowFAQ] = useState(false);
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
        <div className="mt-4 space-y-3">
          {/* Codul blurat */}
          <div className="bg-[#2a2d3a] border border-gray-600/50 rounded-xl p-4 text-center">
            <div className="text-lg font-bold text-white mb-2 blur-sm select-none">
              SAVE50OFF
            </div>
            <p className="text-gray-400 text-xs">Complete the captcha to reveal code</p>
          </div>
          
          {/* Captcha compact */}
          <div className="captcha-container">
            <div
              ref={captchaMountRef}
              className="w-full min-h-[280px] pointer-events-auto bg-[#1a1c24] rounded-xl border border-gray-600/50"
              style={{ position: "relative" }}
            />
          </div>

          {/* Instructions & Tips - Animat */}
          <div className="mt-4 space-y-3 animate-fade-in">
            {/* Progress Steps */}
            <div className="bg-[#2a2d3a] border border-gray-600/50 rounded-xl p-4">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                How to use your code:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-5 h-5 bg-neon-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">Complete the captcha above</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <span className="text-gray-400">Copy the revealed discount code</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <span className="text-gray-400">Apply at {brand} checkout</span>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center justify-between bg-[#2a2d3a] border border-gray-600/50 rounded-xl p-3">
              <span className="text-gray-300 text-xs font-medium">Share this deal:</span>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>

            {/* FAQ Toggle */}
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="w-full bg-[#2a2d3a] border border-gray-600/50 rounded-xl p-3 flex items-center justify-between hover:bg-[#2f3240] transition-colors"
            >
              <span className="text-gray-300 text-xs font-medium">Questions? View FAQ</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showFAQ ? 'rotate-180' : ''}`} />
            </button>

            {/* FAQ Content - Expandabil */}
            {showFAQ && (
              <div className="bg-[#252836] border border-gray-600/50 rounded-xl p-4 animate-fade-in space-y-3">
                <div className="text-xs">
                  <p className="text-gray-400 font-medium mb-1">How long is this code valid?</p>
                  <p className="text-gray-300">Most codes are valid for 24-48 hours or until stock runs out.</p>
                </div>
                <div className="text-xs">
                  <p className="text-gray-400 font-medium mb-1">What if the code doesn't work?</p>
                  <p className="text-gray-300">Try refreshing and getting a new code, or check if minimum purchase requirements apply.</p>
                </div>
                <div className="text-xs">
                  <p className="text-gray-400 font-medium mb-1">Is this safe to use?</p>
                  <p className="text-gray-300">Yes! All codes are verified and safe. We work directly with {brand}.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
