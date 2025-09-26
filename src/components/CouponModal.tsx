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
  const prevOverflowRef = useRef<string>("");

  const [voucherCode] = useState(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  });

  const OGADS_SRC = "https://lockedapp.org/cp/js/n0kjm";

  const removeOverlay = () => {
    const o = document.getElementById("ogads-overlay");
    if (o) o.remove();
    document.body.style.overflow = prevOverflowRef.current || "";
  };

  // Reset + cleanup la fiecare deschidere/închidere
  useEffect(() => {
    if (isOpen) {
      setCodeRevealed(false);
    } else {
      removeOverlay();
    }
  }, [isOpen]);

  // Cleanup la demontare
  useEffect(() => {
    return () => removeOverlay();
  }, []);

  const injectOgads = () => {
    // încarcă scriptul OGAds (de fiecare dată e OK)
    const script = document.createElement("script");
    script.src = OGADS_SRC;
    script.type = "text/javascript";
    document.body.appendChild(script);
  };

  const openCaptchaOverlay = () => {
    // overlay full-screen
    const overlay = document.createElement("div");
    overlay.id = "ogads-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      zIndex: "9999",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      boxSizing: "border-box",
    });

    // box centrat pentru captcha & oferte
    const box = document.createElement("div");
    Object.assign(box.style, {
      position: "relative",
      width: "100%",
      maxWidth: "560px",
      minHeight: "380px",
      borderRadius: "16px",
      background: "#111827", // gray-900
      padding: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      overflow: "hidden",
    });
    // nu închide overlay-ul când clic în box
    box.addEventListener("click", (e) => e.stopPropagation());

    // target-ul OGAds (captcha -> apoi app list)
    const target = document.createElement("div");
    target.setAttribute("data-captcha-enable", "true");
    Object.assign(target.style, {
      width: "100%",
      height: "100%",
      pointerEvents: "auto",
      background: "transparent",
    });

    // buton X
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("aria-label", "Close captcha");
    closeBtn.innerHTML = "✕";
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "36px",
      height: "36px",
      borderRadius: "9999px",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
      color: "#fff",
      background: "rgba(255,255,255,0.18)",
      backdropFilter: "blur(4px)",
      lineHeight: "36px",
    });
    closeBtn.onclick = removeOverlay;

    box.appendChild(closeBtn);
    box.appendChild(target);
    overlay.appendChild(box);
    // click în afara box-ului închide
    overlay.addEventListener("click", removeOverlay);

    document.body.appendChild(overlay);

    // blochează scroll-ul paginii
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // inject OGAds
    injectOgads();
  };

  const handleReveal = () => {
    setCodeRevealed(true);
    setTimeout(openCaptchaOverlay, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => { if (!v) removeOverlay(); onClose(); }}>
      <DialogContent className="sm:max-w-md bg-[#212532] border-gray-600/50 text-white p-0 gap-0 rounded-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Coupon Details for {brand}</DialogTitle>
        <DialogDescription className="sr-only">
          Get verified discount code for {brand}. {offer}
        </DialogDescription>

        {/* Header */}
        <div className="p-6 pb-4 relative">
          <button
            onClick={() => { removeOverlay(); onClose(); }}
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

        {/* Reveal Code */}
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
              <div className="text-center">
                {/* cod blurat (captcha se deschide deasupra, în box separat) */}
                <div className="text-3xl font-bold text-white mb-4 blur-xl select-none">
                  {voucherCode}
                </div>
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
