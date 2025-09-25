import { Ticket, Shield, CheckCircle, Clock, TrendingUp, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end px-4 py-12 relative overflow-hidden">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background decorative stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-8 text-white/10 text-sm">⭐</div>
        <div className="absolute bottom-16 right-8 text-white/15 text-lg">✨</div>
        <div className="absolute top-1/2 right-16 text-white/20 text-xs">⭐</div>
        <div className="absolute top-20 left-1/3 text-white/10 text-sm">✨</div>
        <div className="absolute bottom-1/3 left-12 text-white/15 text-xs">⭐</div>
      </div>

      <div className="max-w-sm mx-auto relative z-10">
        {/* Logo and title */}
        <div className="text-left mb-6">
          <div className="inline-block mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-accent to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-orange-accent mb-3">VoucherFresh</h2>
        </div>

        {/* Description */}
        <p className="text-left text-white/90 text-sm leading-relaxed mb-6">
          Your premium destination for verified discount codes and exclusive deals from the world's top brands.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="px-3 py-2 bg-badge-green/20 border border-badge-green-text/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-badge-green-text" />
              <span className="text-badge-green-text font-semibold text-xs">100% Verified</span>
            </div>
          </div>
          
          <div className="px-3 py-2 bg-badge-purple/20 border border-badge-purple-text/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-badge-purple-text" />
              <span className="text-badge-purple-text font-semibold text-xs">Instant Access</span>
            </div>
          </div>
          
          <div className="px-3 py-2 bg-badge-orange/20 border border-orange-accent/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-orange-accent" />
              <span className="text-orange-accent font-semibold text-xs">Daily Updates</span>
            </div>
          </div>
        </div>

        {/* Why VoucherFresh section */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-badge-purple/20 border border-badge-purple-text/30 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-badge-purple-text" />
            </div>
            <h3 className="text-lg font-bold text-white">Why VoucherFresh?</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-badge-green/20 border border-badge-green-text/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-badge-green-text" />
              </div>
              <span className="text-white font-medium text-sm">100% Verified Codes</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-badge-purple/20 border border-badge-purple-text/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-badge-purple-text" />
              </div>
              <span className="text-white font-medium text-sm">Updated Every Hour</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-badge-orange/20 border border-orange-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-orange-accent" />
              </div>
              <span className="text-white font-medium text-sm">Premium Brand Deals</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-badge-purple/20 border border-badge-purple-text/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-badge-purple-text" />
              </div>
              <span className="text-white font-medium text-sm">Instant Code Access</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};