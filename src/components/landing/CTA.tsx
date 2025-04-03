import React from "react";
import Link from "next/link";
import { ArrowRight, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-10 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#0141FF]/10 to-[#0A0A0A] p-1">
          <div className="relative rounded-xl bg-black/50 p-8 backdrop-blur-xl sm:p-12">
            <div className="absolute inset-0 rounded-xl bg-[url('/images/grid.svg')] bg-center opacity-10 mix-blend-overlay"></div>

            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#0A84FF]/10 blur-[64px]"></div>

            <div className="relative">
              <div className="mx-auto flex max-w-xs items-center justify-center gap-2 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-4 py-1 text-sm text-[#0A84FF]">
                <Download className="h-3 w-3" />
                No installation required
              </div>

              <h2 className="mt-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Ready to explore the world?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed text-white/60">
                Start using our powerful location tools today and discover the
                precision of geographic coordinates.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/app">
                  <Button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#0141FF] px-8 py-6 text-base font-semibold text-white transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-[1px] sm:w-auto">
                    <span className="relative z-10 flex items-center gap-2">
                      Launch Application
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <a
                  href="https://github.com/dipaktech/geolocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 sm:w-auto"
                >
                  View Source Code
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
