import React from "react";
import Link from "next/link";
import { Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0141FF] to-[#0EA5E9] shadow-lg shadow-blue-500/20">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              GeoLocator
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/dipaktech/geolocator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.12] hover:shadow-lg hover:shadow-white/5 sm:px-4"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <Link href="/app">
              <Button className="rounded-full bg-gradient-to-r from-[#0A84FF] to-[#0141FF] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-[1px] sm:px-5">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
