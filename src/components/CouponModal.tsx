import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, CheckCircle, Clock, Users, Copy } from "lucide-react";
import { useState, useEffect } from "react";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  logo: string;
  brand: string;
  offer: string;
  usedCount: number;
  remainingCount: number;
}

export const CouponModal = ({
  isOpen,
  onClose,
  logo,
  brand,
  offer,
  usedCount,
  remainingCount,
}: CouponModalProps) => {
  const [codeRevealed, setCodeRevealed] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const [voucherCode] = useState(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  });

  // Reset când deschizi modalul
  useEffect(() => {
    if (isOpen) {
      setCodeRevealed(false);
      setShowCaptcha(false);
      setIframeKey((k) => k + 1); // iframe fresh la fiecare open
    }
  }, [isOpen]);

  // mic delay ca să vezi voucherul blurat înainte de captcha
  const handleReveal = () => {
    setCodeRevealed(true);
    setShowCaptcha(false);
    // după ~700ms intră captcha în același box
    setTimeout(() => {
      setIframeKey((k) => k + 1); // forțează remount (curat)
      setShowCaptcha(true);
    }, 700);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#212532] border-gray-600/50 text-white p-0 gap-0 rounded-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Coupon Details for {brand}</DialogTitle>
        <DialogDescription className="sr-only">
          Get verified discount code for {brand}. {offer}
        </DialogDescription>

        {/* Header */}
        <div className="p-6 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            aria-label="Close"
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
                  {usedCount}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Used</p>
            </div>

            <div className="w-px h-12 bg-gray-600" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-3xl font-bold text-orange-400 tabular-nums inline-block min-w-[60px] text-center">
                  {remainingCount}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Uses Remaining</p>
            </div>
          </div>
        </div>

        {/* Reveal Code */}
        <div className="px-6 py-4">
          {/* container FIX: înălțime controlată, nu mai „umflă” */}
          <div className="relative h-[140px] max-w-xs mx-auto border-2 border-dashed border-gray-600 rounded-xl p-3 overflow-hidden">
            {!codeRevealed ? (
              <div className="grid place-items-center h-full">
                <button
                  onClick={handleReveal}
                  className="min-w-[120px] min-h-[40px] bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-xl
                             transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Copy className="w-4 h-4" />
                  <span>Reveal Code</span>
                </button>
              </div>
            ) : showCaptcha ? (
              // Captcha încadrat PERFECT în box
              <div className="absolute inset-3">
                <iframe
                  key={iframeKey}
                  src={`/locker-host.html?ts=${Date.now()}`}
                  sandbox="allow-scripts allow-same-origin"
                  className="w-full h-full rounded-md border-0"
                  title="captcha-locker"
                />
              </div>
            ) : (
              // voucher blurat, vizibil ~700ms
              <div className="grid place-items-center h-full">
                <div className="text-3xl font-bold text-white/90 blur-[3px] tracking-widest select-none">
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
