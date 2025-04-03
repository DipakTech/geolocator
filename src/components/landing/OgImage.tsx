import React from "react";
import { MapPin } from "lucide-react";

// This component is designed as a reference to create
// a static OG image that can be used for sharing
const OgImage = () => {
  return (
    <div className="flex h-[630px] w-[1200px] flex-col items-center justify-center bg-black text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0141FF]/30 via-[#0A0A0A] to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 p-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0141FF] to-[#0EA5E9] shadow-lg shadow-blue-500/20">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <span className="text-4xl font-bold tracking-tight">GeoLocator</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent">
          Find any location with precision
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-center text-xl text-white/70">
          Explore the world with our powerful location search and mapping tool.
          Get exact coordinates, detailed information, and interactive maps in
          one beautiful interface.
        </p>

        {/* URL */}
        <div className="mt-6 text-xl text-[#0A84FF]">
          geoLocator.oneclickresult.com
        </div>
      </div>
    </div>
  );
};

export default OgImage;

// Note: To create a static OG image:
// 1. Render this component in a special page
// 2. Take a screenshot of the rendered page at 1200x630
// 3. Save the image as og-image.png in public/images/
