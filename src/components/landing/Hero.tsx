import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-3 py-1 text-sm text-[#0A84FF]">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#0A84FF] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0A84FF]"></span>
              </span>
              Coordinate Precision at Your Fingertips
            </div>
            <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Find any location with precision
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Get exact coordinates, detailed information, and interactive maps
              in one beautiful interface.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/app" className="w-full sm:w-auto">
                <Button className="group relative w-full overflow-hidden rounded-lg bg-[#0A84FF] px-8 py-6 text-base font-medium text-white transition-all hover:translate-y-[-2px] hover:bg-[#0A84FF]/90 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-[1px] sm:w-auto">
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-[#0A84FF] to-[#0141FF] transition-transform duration-300 group-hover:translate-y-0"></div>
                </Button>
              </Link>
              <a
                href="#features"
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-8 py-2 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:shadow-lg hover:shadow-white/5 sm:w-auto"
              >
                Learn More
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Scrollable Feature Preview */}
            <div className=" mt-10 overflow-hidden rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <div className="flex space-x-1">
                  <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="text-xs text-white/40">Feature Highlights</div>
                <div className="w-16"></div>
              </div>

              <div className="custom-scrollbar max-h-[180px] overflow-y-auto p-4 text-sm">
                {[
                  "🌍 Global address search with autocomplete",
                  "📍 One-click current location detection",
                  "🔍 Interactive map with zoom and pan controls",
                  "📋 Copy coordinates with a single click",
                  "📱 Responsive design for all devices",
                  "🔗 Integration with Google Maps",
                  "📊 Detailed location information",
                  "🌐 Reverse geocoding capabilities",
                  "⚡ Fast and lightweight experience",
                  "🔒 Privacy-focused, no data collection",
                  "🖼️ Beautiful, modern interface",
                  "⌨️ Keyboard navigation support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group mb-3 flex items-start rounded border border-white/5 bg-white/[0.03] p-2 last:mb-0 hover:border-[#0A84FF]/20 hover:bg-gradient-to-r hover:from-[#0A84FF]/5 hover:to-transparent"
                  >
                    <div className="mr-2 mt-0.5 text-base">
                      {feature.split(" ")[0]}
                    </div>
                    <div>{feature.split(" ").slice(1).join(" ")}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="text-sm text-white/40">
                Trusted by developers on:
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="text-white/30 transition-colors hover:text-white/60">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="text-white/30 transition-colors hover:text-white/60">
                  <svg className="h-5" viewBox="0 0 124 20" fill="currentColor">
                    <path d="M23.449 14.662h-6.006V0h6.006v14.662zM33.052 0v5.663h-6.607V0h6.607zM33.052 14.662h-6.607V8.075h6.607v6.587zM43.351 0v5.663h-6.606V0h6.606zM43.351 14.662h-6.606V8.075h6.606v6.587zM47.343 0h6.729v14.809h-6.729V0zM61.357 0H68.086v14.809h-6.729V0zM69.885 9.294v-3.53h9.12v3.53h-9.12zM79.429 14.662h-6.008V0h6.008v14.662zM80.071 10.637h10.947v4.025H80.071v-4.025zM80.071 0h10.947v4.025H80.071V0zM99.569 10.637v-6.61h6.005v6.61h-6.005zM111.277 0v14.662h-6.008V0h6.008zM113.073 0h10.946v4.025h-10.946V0zM113.073 10.637h10.946v4.025h-10.946v-4.025z" />
                  </svg>
                </div>
                <div className="text-white/30 transition-colors hover:text-white/60">
                  <svg className="h-6" viewBox="0 0 512 97" fill="currentColor">
                    <path d="M52.94 40.68L52.94 51.77L0 51.77L0 40.68L52.94 40.68ZM134.49 24.86L72.48 24.86L72.48 38.43L122.37 38.43L122.37 46.65L72.48 46.65L72.48 61.26L134.49 61.26L134.49 71.32L62.42 71.32L62.42 14.8L134.49 14.8L134.49 24.86ZM175.19 24.86L146.41 24.86L146.41 42.93L175.19 42.93L175.19 24.86ZM175.19 52.99L146.41 52.99L146.41 71.32L136.35 71.32L136.35 14.8L185.25 14.8L185.25 71.32L175.19 71.32L175.19 52.99ZM225.96 24.86L214.87 24.86L214.87 71.32L204.81 71.32L204.81 24.86L193.73 24.86L193.73 14.8L225.96 14.8L225.96 24.86ZM249.04 71.32L239.01 71.32L239.01 14.8L249.04 14.8L249.04 71.32ZM293.57 24.86L259.12 24.86L259.12 37.39L293.57 37.39L293.57 47.45L259.12 47.45L259.12 71.32L249.06 71.32L249.06 14.8L293.57 14.8L293.57 24.86ZM329.76 71.32L319.7 71.32L319.7 24.86L300.61 24.86L300.61 14.8L348.85 14.8L348.85 24.86L329.76 24.86L329.76 71.32ZM422.53 71.32L412.47 71.32L412.47 47.71L381.12 47.71L381.12 71.32L371.06 71.32L371.06 14.8L381.12 14.8L381.12 37.65L412.47 37.65L412.47 14.8L422.53 14.8L422.53 71.32ZM447.17 44.06L447.17 14.8L457.2 14.8L457.2 44.06Q457.2 53.35 461.47 58.09Q465.74 62.82 474 62.82Q482.26 62.82 486.53 58.09Q490.8 53.35 490.8 44.06L490.8 14.8L500.83 14.8L500.83 44.06Q500.83 57.54 493.91 64.43Q486.99 71.32 474 71.32Q461.01 71.32 454.09 64.43Q447.17 57.54 447.17 44.06Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-t from-black/20 to-white/[0.05] p-2 shadow-2xl shadow-black/20 backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:to-white/10 before:opacity-50">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0141FF]/5 via-transparent to-[#6366F1]/5"></div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm">
                <Image
                  src="/images/preview.png"
                  alt="Application Preview"
                  width={700}
                  height={400}
                  className="rounded-xl object-cover"
                  priority
                  onError={(e) => {
                    // Fallback for missing image
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400' viewBox='0 0 700 400'%3E%3Crect width='700' height='400' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='24' fill='%23555'%3EApplication Preview%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Mock UI elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-lg rounded-xl ">
                    {/* Mock search bar */}
                    <div className="mb-4 rounded-lg bg-white/10 p-3 shadow-lg shadow-black/20">
                      <div className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-white/50" />
                        <div className="h-3 w-48 rounded-full bg-white/30"></div>
                      </div>
                    </div>

                    {/* Mock map area */}
                    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                      <div className="grid h-full place-content-center">
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <div className="absolute -left-1 -top-1 h-4 w-4 animate-ping rounded-full bg-[#0A84FF]/30"></div>
                            <MapPin className="h-8 w-8 text-[#0A84FF] drop-shadow-[0_0_8px_rgba(10,132,255,0.5)]" />
                          </div>
                          <div className="mt-2 h-2 w-32 rounded-full bg-white/20"></div>
                          <div className="mt-1 h-2 w-24 rounded-full bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#0A84FF]/20 blur-[32px]"></div>
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#6366F1]/20 blur-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
