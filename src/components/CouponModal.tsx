import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, CheckCircle, Clock, Users, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  logo: string;
  brand: string;
  offer: string;
  usedToday: number;
  timeLeft: number;
}

export const CouponModal = ({
  isOpen,
  onClose,
  logo,
  brand,
  offer,
  usedToday,
  timeLeft,
}: CouponModalProps) => {
  const [codeRevealed, setCodeRevealed] = useState(false);
  const [captchaActive, setCaptchaActive] = useState(false);
  const captchaRef = useRef<HTMLDivElement | null>(null);

  const [voucherCode] = useState(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  });

  // reset la deschidere/închidere
  useEffect(() => {
    if (isOpen) {
      setCodeRevealed(false);
      setCaptchaActive(false);
      // curăță containerul dacă rămâne ceva montat
      if (captchaRef.current) captchaRef.current.innerHTML = "";
    } else {
      // curăță scriptul când se închide
      document
        .querySelectorAll<HTMLScriptElement>('script[src*="lockedapp.org/cp/js"]')
        .forEach((s) => s.remove());
    }
  }, [isOpen]);

  // injectează OGAds doar când activăm captcha
  useEffect(() => {
    if (!captchaActive) return;
    if (!captchaRef.current) return;

    // golim containerul și setăm atributul cerut de OGAds
    captchaRef.current.innerHTML = "";
    captchaRef.current.setAttribute("data-captcha-enable", "true");

    // scoatem orice script vechi apoi încărcăm cu cache-buster
    document
      .querySelectorAll<HTMLScriptElement>('script[src*="lockedapp.org/cp/js"]')
      .forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = `https://lockedapp.org/cp/js/n0kjm?t=${Date.now()}`;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, [captchaActive]);

  const handleReveal = () => {
    setCodeRevealed(true);
    setTimeout(() => setCaptchaActive(true), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md bg-[#212532] border-gray-600/50 text-white p-0 gap-0 rounded-2xl [&>button]:hidden
                   relative z-[1000] pointer-events-auto overflow-visible"
      >
        <DialogTitle className="sr-only">Coupon Details for {brand}</DialogTitle>
        <DialogDescription className="sr-only">
          Get verified discount code for {brand}. {offer}
        </DialogDescription>

        {/* Header */}
        <div className="p-6 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              <img src={logo} alt={`${brand} logo`} width={48} height={48} className="object-contain" />
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-white mb-2">{brand}</h2>
              <p className="text-gray-300 text-base font-medium leading-snug">{offer}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <CheckCircle className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-semibold">Verified Working (10 hours ago)</span>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-3xl font-bold text-purple-400 tabular-nums inline-block min-w-[60px] text-center">
                  {usedToday}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Used Today</p>
            </div>

            <div className="w-px h-12 bg-gray-600" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-3xl font-bold text-orange-400 tabular-nums inline-block min-w-[60px] text-center">
                  {timeLeft}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Hours Left</p>
            </div>
          </div>
        </div>

        {/* Reveal + Captcha în BOX (cu dashed) */}
        <div className="px-6 py-4">
          <div className="border-2 border-dashed border-gray-600 rounded-xl p-3 relative max-w-xs mx-auto">
            {!codeRevealed ? (
              <button
                onClick={handleReveal}
                className="w-full bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Copy className="w-4 h-4" />
                <span>Reveal Code</span>
              </button>
            ) : (
              <div className="flex flex-col items-center">
                {/* cod blurat */}
                <div className="text-3xl font-bold text-white mb-3 blur-xl select-none">
                  {voucherCode}
                </div>

                {/* aici montează OGAds */}
                {captchaActive && (
                  <div
                    ref={captchaRef}
                    className="w-full min-h-[120px] rounded-lg border-2 border-dashed border-gray-500 p-2 bg-transparent
                               pointer-events-auto"
                    // IMPORTANT: fără transform/filters pe ascendenți care să blocheze iframe pe iOS
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Offer Details */}
        <div className="px-6 pb-6">
          <div className="bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-white font-bold text-lg mb-2">Offer Details:</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Apply this discount code when you checkout to get {offer.toLowerCase()} your {brand} purchase and receive immediate savings on various products.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
