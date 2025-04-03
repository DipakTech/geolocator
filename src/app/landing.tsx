"use client";

import React from "react";
import {
  Header,
  Hero,
  Features,
  CTA,
  Footer,
  Background,
} from "@/components/landing";

const LandingPage = () => {
  return (
    <div className="relative mx-auto min-h-screen bg-black text-white">
      {/* Background Elements */}
      <Background />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <Header />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
