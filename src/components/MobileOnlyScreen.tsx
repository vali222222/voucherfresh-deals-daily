import { Ticket, Monitor, Smartphone, ArrowRight } from "lucide-react";

export const MobileOnlyScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-4 z-50">
      <div className="bg-[#212532] rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-600/30">
        {/* Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center">
            <Monitor className="w-6 h-6 text-red-400" />
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400" />
          <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-green-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-6">Mobile Only Access</h1>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          VoucherFresh is optimized exclusively for mobile devices. Please visit us on your smartphone or tablet to access our exclusive deals and coupon codes.
        </p>

        {/* How to access */}
        <div className="bg-[#1a1c24] rounded-2xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">How to access:</h3>
          <div className="space-y-2 text-left">
            <div className="flex items-start gap-2">
              <span className="text-orange-accent">•</span>
              <span className="text-gray-300 text-sm">Open this site on your mobile phone</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-accent">•</span>
              <span className="text-gray-300 text-sm">Use a tablet device</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-accent">•</span>
              <span className="text-gray-300 text-sm">Resize your browser window to mobile size</span>
            </div>
          </div>
        </div>

        {/* Logo and Brand */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-accent to-yellow-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.6),0_0_40px_rgba(251,146,60,0.4)] ring-1 ring-orange-300/30 mb-3">
            <Ticket className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-lg font-bold">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              VoucherFresh
            </span>
          </h2>
          <p className="text-gray-400 text-sm">Mobile-First Savings</p>
        </div>
      </div>
    </div>
  );
};