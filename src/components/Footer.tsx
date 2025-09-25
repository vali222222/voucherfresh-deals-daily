import { Ticket, Shield, CheckCircle, Clock, TrendingUp, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-12 w-6 h-6 border-2 border-white/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-12 w-8 h-8 border-2 border-white/15 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo and title */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-accent to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Ticket className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-orange-accent mb-4">VoucherFresh</h2>
        </div>

        {/* Description */}
        <p className="text-center text-white/90 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          Your premium destination for verified discount codes and exclusive deals from the world's top brands.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-5 py-3 bg-badge-green/20 border border-badge-green-text/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-badge-green-text" />
              <span className="text-badge-green-text font-semibold">100% Verified</span>
            </div>
          </div>
          
          <div className="px-5 py-3 bg-badge-purple/20 border border-badge-purple-text/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-badge-purple-text" />
              <span className="text-badge-purple-text font-semibold">Instant Access</span>
            </div>
          </div>
          
          <div className="px-5 py-3 bg-badge-orange/20 border border-orange-accent/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-accent" />
              <span className="text-orange-accent font-semibold">Daily Updates</span>
            </div>
          </div>
        </div>

        {/* Why VoucherFresh section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-badge-purple/20 border border-badge-purple-text/30 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-badge-purple-text" />
            </div>
            <h3 className="text-2xl font-bold text-white">Why VoucherFresh?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-badge-green/20 border border-badge-green-text/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-badge-green-text" />
              </div>
              <span className="text-white font-medium">100% Verified Codes</span>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-badge-purple/20 border border-badge-purple-text/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-badge-purple-text" />
              </div>
              <span className="text-white font-medium">Updated Every Hour</span>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-badge-orange/20 border border-orange-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-orange-accent" />
              </div>
              <span className="text-white font-medium">Premium Brand Deals</span>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-badge-purple/20 border border-badge-purple-text/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-badge-purple-text" />
              </div>
              <span className="text-white font-medium">Instant Code Access</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};