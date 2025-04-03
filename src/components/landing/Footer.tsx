import { MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0141FF] to-[#0EA5E9]">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-medium">GeoLocator</span>
          </div>
          {/* <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div> */}
          <div className="text-sm text-white/40">
            © made with 💓 by DIPAK GIRI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
