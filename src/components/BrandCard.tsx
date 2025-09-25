import { Tag, Users, Clock } from "lucide-react";

interface BrandCardProps {
  logo: string;
  brand: string;
  offer: string;
  usedToday: number;
  timeLeft: number;
}

export const BrandCard = ({ logo, brand, offer, usedToday, timeLeft }: BrandCardProps) => {
  return (
    <div className="bg-dark-card border border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-neon-green/30">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
          <img 
            src={logo} 
            alt={`${brand} logo`} 
            className="w-10 h-10 object-contain"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-foreground mb-2">{brand}</h3>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            {offer}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">{usedToday} used today</span>
        </div>
        
        <div className="px-3 py-1 bg-badge-orange/20 border border-orange-accent/20 rounded-full">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-orange-accent" />
            <span className="text-orange-accent text-sm font-semibold">
              {timeLeft} left
            </span>
          </div>
        </div>
      </div>

      <button className="w-full bg-neon-green hover:bg-neon-green/90 text-dark-background font-bold py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
        <Tag className="w-5 h-5" />
        <span className="text-lg">Get Coupon Code</span>
      </button>
    </div>
  );
};