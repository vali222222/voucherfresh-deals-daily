import { Tag, Users, Clock } from "lucide-react";
import { useState, memo, useCallback } from "react";
import { CouponModal } from "./CouponModal";
import { LazyImage } from "./LazyImage";

interface BrandCardProps {
  logo: string;
  brand: string;
  offer: string;
  usedToday: number;
  timeLeft: number;
}

export const BrandCard = memo(({ logo, brand, offer, usedToday, timeLeft }: BrandCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div
      className="bg-[#212532] border border-gray-600/50 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-neon-green/30 ring-1 ring-gray-500/20 min-h-[220px]"
    >
      {/* Header brand */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <LazyImage
            src={logo}
            alt={`${brand} logo`}
            width={40}
            height={40}
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

      {/* Meta (pills gemene) */}
      <div className="flex items-center gap-3 mb-4">
        {/* used today — pill gri */}
        <div className="px-2.5 py-1 rounded-full border bg-[#3a4150] border-white/10">
          <div className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-white/90" />
            <span className="text-white/90 text-xs font-semibold inline-block min-w-[60px] text-center tabular-nums">
              {usedToday}
            </span>
            <span className="text-white/80 text-xs font-semibold">used today</span>
          </div>
        </div>

        {/* left — portocaliu */}
        <div className="px-2.5 py-1 bg-badge-orange/20 border border-orange-accent/20 rounded-full">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-orange-accent" />
            <span className="text-orange-accent text-xs font-semibold inline-block min-w-[60px] text-center tabular-nums">
              {timeLeft} left
            </span>
          </div>
        </div>
      </div>

      {/* Buton stabil */}
      <button
        onClick={handleOpenModal}
        className="w-full min-w-[120px] min-h-[40px] bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        <Tag className="w-4 h-4" />
        <span className="text-sm">Get Coupon Code</span>
      </button>

      {/* 👇 PASĂM valorile în modal */}
      <CouponModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        logo={logo}
        brand={brand}
        offer={offer}
        usedCount={usedToday}
        remainingCount={timeLeft}
      />
    </div>
  );
});
