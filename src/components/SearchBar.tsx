import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 -mt-6 relative z-20">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder="Search brands, stores, or deals..."
          className="w-full pl-10 pr-10 py-3 bg-dark-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent shadow-lg backdrop-blur-sm"
        />
      </div>
    </div>
  );
};