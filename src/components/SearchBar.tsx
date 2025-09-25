import { Search } from "lucide-react";
import { memo, useCallback } from "react";
import { debounce } from "@/utils/performance";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar = memo(({ searchQuery, onSearchChange }: SearchBarProps) => {
  
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearchChange(value);
    }, 300),
    [onSearchChange]
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  }, [debouncedSearch]);
  
  return (
    <div className="w-full max-w-lg mx-auto px-4 -mt-6 relative z-20">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 z-10">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          defaultValue={searchQuery}
          onChange={handleInputChange}
          placeholder="Search brands, stores, or deals..."
          className="w-full pl-10 pr-4 py-3 bg-[#212532]/75 border border-gray-500/40 rounded-xl text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent shadow-lg backdrop-blur-sm"
        />
      </div>
    </div>
  );
});