import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, CheckCircle, Clock, Users, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    OGAds?: any;
    ogads?: any;
    OGADS?: any;
  }
}

export const CouponModal = ({ isOpen, onClose, logo, brand, offer, usedToday, timeLeft }: CouponModalProps) => {
  const [codeRevealed, setCodeRevealed] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaMountRef = useRef<HTMLDivElement | null>(null);

  // 1) Reset la deschiderea modalului
  useEffect(() => {
    if (isOpen) {
      setCodeRevealed(false);
      setShowCaptcha(false);
    }
  }, [isOpen]);

  // 2) Asigură-te că scriptul OGAds există (în caz că rulezi componenta izolată)
  useEffect(() => {
    if (document.getElementById("ogads-locker")) return; // deja e în index.html
    const s = document.createElement("script");
    s.id = "ogads-locker";
    s.src = "https://pagelocked.org/cp/js/n0kjm";
    s.async = true;
    document.body.appendChild(s);
    return () => {};
  }, []);

  // 3) Când cerem captcha (după click pe Reveal), montăm "fresh" mount-pointul
  useEffect(() => {
    if (!showCaptcha || !captchaMountRef.current) return;

    // Golim containerul și punem un mount nou, "curat"
    captchaMountRef.current.innerHTML = "";
    const mount = document.createElement("div");
    mount.setAttribute("data-captcha-enable", "true");
    captchaMountRef.current.appendChild(mount);

    // Unele implementări OGAds auto-scannează; dacă nu, mai declanșăm un "load"
    // și o mică deferență ca să prindă DOM-ul.
    setTimeout(() => {
      try {
        // dacă OGAds expune ceva, încercăm init/scan fără să crape
        const api = window.OGAds || window.ogads || window.OGADS;
        api?.init?.();
        api?.scan?.();
      } catch (_) {}
      window.dispatchEvent(new Event("load"));
      document.dispatchEvent(new Event("DOMContentLoaded"));
    }, 50);
  }, [showCaptcha]);

  // ... restul codului tău (UI) rămâne neschimbat, doar în zona "Reveal" + captcha modificăm:

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#212532] border-gray-600/50 text-white p-0 gap-0 rounded-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Coupon Details for {brand}</DialogTitle>
        <DialogDescription className="sr-only">
          Get verified discount code for {brand}. {offer}
        </DialogDescription>

        {/* ... header + stats identic ... */}

        {/* Reveal Code Button */}
        <div className="px-6 py-4">
          <div className="border-2 border-dashed border-gray-600 rounded-xl p-3 relative min-h-[80px] max-w-xs mx-auto">
            {!codeRevealed ? (
              <button
                onClick={() => {
                  setCodeRevealed(true);
                  // arătăm captcha imediat după "Reveal"
                  setTimeout(() => setShowCaptcha(true), 120); // mic delay pt. animatii / layout
                }}
                className="w-full min-w-button min-h-button bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Copy className="w-4 h-4" />
                <span>Reveal Code</span>
              </button>
            ) : showCaptcha ? (
              <div className="absolute inset-3 flex items-center justify-center">
                {/* ✅ Aici OGAds injectează captcha */}
                <div ref={captchaMountRef} className="w-full min-h-[56px] flex items-center justify-center" />
              </div>
            ) : (
              <div className="absolute inset-3 flex items-center justify-center">
                {/* Placeholder blurred înainte de captcha */}
                <div className="text-3xl font-bold text-white blur-xl select-none">••••••••</div>
              </div>
            )}
          </div>
        </div>

        {/* ... Offer Details identic ... */}
      </DialogContent>
    </Dialog>
  );
};
