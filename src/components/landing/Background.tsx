import React from "react";

const Background = () => {
  return (
    <>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0141FF]/30 via-[#0A0A0A] to-black"></div>
      <div className="absolute inset-0">
        {/* Animated orbs */}
        <div className="animate-float-slow absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-[#4F46E5]/20 blur-[120px]"></div>
        <div className="animate-float-slow-reverse absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/20 blur-[120px]"></div>
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
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      ></div>
    </>
  );
};

export default Background;
