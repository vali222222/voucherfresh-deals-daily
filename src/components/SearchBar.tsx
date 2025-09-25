import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  
  return (
    <div className="w-full max-w-lg mx-auto px-4 -mt-6 relative z-20">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 z-10">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search brands, stores, or deals..."
          className="w-full pl-10 pr-4 py-3 bg-[#212532]/25 border border-gray-500/20 rounded-xl text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent shadow-lg backdrop-blur-sm"
        />
      </div>
    </div>
  );
};