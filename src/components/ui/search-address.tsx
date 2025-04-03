"use client";
import React from "react";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandLoading } from "cmdk";
import type { RawResult } from "leaflet-geosearch/dist/providers/bingProvider.js";
import type { SearchResult } from "leaflet-geosearch/dist/providers/provider.js";
import { useSearchAddress } from "@/hooks/use-search-address";

interface SearchAddressProps {
  onSelectLocation: (item: SearchResult<RawResult> | null) => void;
  className?: string;
}

const SearchAddress: React.FC<SearchAddressProps> = ({
  onSelectLocation,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  const {
    query,
    results,
    loading,
    handleSearch,
    selectedItem,
    setSelectedItem,
  } = useSearchAddress();

  const formatSelectedLocation = (item: SearchResult<RawResult>) => {
    return item.label;
  };

  // Create a flat array of all items for easier selection
  const allItems = React.useMemo(() => {
    return Object.values(results).flat();
  }, [results]);

  const handleSelect = React.useCallback(
    (currentValue: string) => {
      const selectedResult = allItems.find(
        (item) => item.label === currentValue,
      );
      setSelectedItem(selectedResult ?? null);
      onSelectLocation(selectedResult ?? null);
      setOpen(false);
    },
    [allItems, onSelectLocation, setSelectedItem],
  );

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "group relative w-full justify-between border-0 bg-white/[0.08] py-[10px] text-left font-normal text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all hover:bg-white/[0.12] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] focus:bg-white/[0.12] focus:shadow-[0_0_0_1px_#0A84FF] active:scale-[0.98]",
              className,
            )}
          >
            <div className="flex items-center gap-2.5">
              <Search className="h-[18px] w-[18px] text-white/40 transition-colors group-hover:text-white/60" />
              <p className="truncate text-[15px] tracking-[-0.01em]">
                {selectedItem
                  ? formatSelectedLocation(selectedItem)
                  : "Search for a location..."}
              </p>
            </div>
            <ChevronsUpDown className="h-[18px] w-[18px] shrink-0 text-white/40 transition-colors group-hover:text-white/60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border-0 p-0 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 sm:w-full sm:max-w-lg md:max-w-xl"
          align="start"
          sideOffset={8}
          style={{ zIndex: 9999 }}
          forceMount
        >
          <Command className="relative overflow-visible rounded-2xl border-0 bg-gradient-to-b from-[rgba(20,20,20,0.98)] to-[rgba(28,28,28,0.98)] shadow-2xl backdrop-blur-2xl">
            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0141FF]/5 via-transparent to-[#6366F1]/5"></div>

            {/* Noise texture */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.15] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative border-b border-white/[0.08] px-4 pb-3 pt-3">
              <CommandInput
                placeholder="Type an address or place name..."
                onValueChange={handleSearch}
                className="h-7 border-0 bg-transparent text-[15px] text-white placeholder:text-white/40"
              />
            </div>
            <CommandList className="custom-scrollbar relative max-h-[40vh] overflow-auto px-2 pb-2 pt-1 sm:max-h-[320px]">
              {loading ? (
                <CommandLoading>
                  <div className="flex items-center justify-center py-8">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#0A84FF]"></div>
                  </div>
                </CommandLoading>
              ) : Object.keys(results).length > 0 ? (
                Object.entries(results).map(([type, items]) => (
                  <CommandGroup
                    key={type}
                    heading={type.charAt(0).toUpperCase() + type.slice(1)}
                    className="px-2 pt-3 text-[13px] font-medium text-white/40 first:pt-1"
                  >
                    {items.map((item) => (
                      <CommandItem
                        key={item.label}
                        value={item.label}
                        onSelect={handleSelect}
                        className="group relative flex cursor-pointer select-none items-center gap-3 rounded-lg px-2 py-2 text-[15px] text-white outline-none transition-all hover:bg-gradient-to-r hover:from-white/[0.08] hover:to-white/[0.06] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <Check
                          className={cn(
                            "h-[18px] w-[18px] text-[#0A84FF] transition-all",
                            selectedItem?.label === item.label
                              ? "scale-100 opacity-100"
                              : "scale-90 opacity-0",
                          )}
                        />
                        <span className="line-clamp-2 break-all text-[14px] leading-[1.3] tracking-[-0.01em] sm:text-[15px]">
                          {item.label}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))
              ) : query.length > 0 ? (
                <CommandEmpty className="py-8 text-center text-[15px] text-white/40">
                  No results found.
                </CommandEmpty>
              ) : (
                <CommandEmpty className="py-8 text-center text-[15px] text-white/40">
                  Start typing to search...
                </CommandEmpty>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchAddress;
