import { Ticket } from "lucide-react";

export const VoucherHeader = () => {
  return (
    <header className="relative bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end min-h-[50vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background decorative stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-20 right-16 w-6 h-6 border-2 border-white/15 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-8 w-10 h-10 border-2 border-white/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 left-20 w-4 h-4 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-8 w-6 h-6 border border-white/15 rounded-full"></div>
      </div>

      {/* Logo and title */}
      <div className="relative z-10 text-center mb-8">
        <div className="mb-6 inline-block">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-accent to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <Ticket className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-orange-accent mb-2 tracking-tight">
          VoucherFresh
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">
          Premium Deals • Verified Daily
        </p>

        {/* Status badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="px-6 py-3 bg-badge-green/20 border border-badge-green-text/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-badge-green-text rounded-full"></div>
              <span className="text-badge-green-text font-semibold">2,854 Active</span>
            </div>
          </div>
          
          <div className="px-6 py-3 bg-badge-orange/20 border border-orange-accent/30 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-accent rounded-full"></div>
              <span className="text-orange-accent font-semibold">98% Success</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};