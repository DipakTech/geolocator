"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { SearchResult } from "leaflet-geosearch/dist/providers/provider.js";
import type { RawResult } from "leaflet-geosearch/dist/providers/bingProvider.js";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SearchAddress = dynamic(() => import("@/components/ui/search-address"), {
  ssr: false,
});

const MapView = dynamic(() => import("@/components/ui/map-view"), {
  ssr: false,
});

interface Location {
  lat: number;
  lng: number;
  label?: string;
}

export default function AppPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [mapClickLocation, setMapClickLocation] = useState<Location | null>(
    null,
  );

  const handleLocationSelect = (location: SearchResult<RawResult> | null) => {
    if (location) {
      setSelectedLocation({
        lat: Number(location.y),
        lng: Number(location.x),
        label: location.label,
      });
    } else {
      setSelectedLocation(null);
    }
  };

  const handleMapClick = (location: Location) => {
    setMapClickLocation(location);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0141FF] via-[#0A0A0A] to-black"></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Top-right orb */}
        <div className="animate-float-slow absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#4F46E5] opacity-20 blur-[128px]"></div>

        {/* Bottom-left orb */}
        <div className="animate-float-slow-reverse absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#0EA5E9] opacity-20 blur-[128px]"></div>

        {/* Center orb */}
        <div className="animate-pulse-slow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1] opacity-[0.15] blur-[128px]"></div>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: "contrast(300%) brightness(1000%)",
        }}
      ></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      ></div>

      {/* Content */}
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 py-6">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/landing"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.12]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/[0.08] backdrop-blur-2xl">
            <div className="relative p-4">
              {/* Inner highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent"></div>

              {/* Content */}
              <div className="relative space-y-8">
                <div>
                  <h1 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-medium tracking-tight text-transparent">
                    Location Search
                  </h1>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                    Search for any location or use your current position to
                    explore the map. Click anywhere on the map to get exact
                    coordinates.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="relative w-full max-w-3xl">
                    <SearchAddress
                      onSelectLocation={handleLocationSelect}
                      className="custom-scrollbar w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white shadow-lg shadow-black/20 backdrop-blur-md focus:ring-2 focus:ring-[#0A84FF]/50"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                    <MapView
                      selectedLocation={selectedLocation}
                      onMapClick={handleMapClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
