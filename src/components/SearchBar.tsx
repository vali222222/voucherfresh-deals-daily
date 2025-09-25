import { Search } from "lucide-react";

export const SearchBar = () => {
  console.log("SearchBar component rendering");
  console.log("Search icon component:", Search);
  
  return (
    <div className="w-full max-w-lg mx-auto px-4 -mt-6 relative z-20">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 z-10">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search brands, stores, or deals..."
          className="w-full pl-10 pr-4 py-3 bg-dark-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent shadow-lg backdrop-blur-sm"
        />
      </div>
    </div>
  );
};