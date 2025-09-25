import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 -mt-8 relative z-20">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Search brands, stores, or deals..."
          className="w-full pl-12 pr-6 py-4 bg-dark-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent shadow-xl backdrop-blur-sm"
        />
      </div>
    </div>
  );
};