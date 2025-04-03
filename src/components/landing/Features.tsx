import React from "react";
import {
  Search,
  MapPin,
  Compass,
  Map,
  Globe,
  ExternalLink,
} from "lucide-react";

const Features = () => {
  const featureItems = [
    {
      icon: <Search className="h-6 w-6 text-[#0A84FF]" />,
      title: "Address Search",
      description:
        "Search for any location worldwide with our powerful address lookup system that provides detailed results.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#0A84FF]" />,
      title: "Precise Coordinates",
      description:
        "Get exact coordinates for any location by clicking on the map, with support for decimal degrees and DMS.",
    },
    {
      icon: <Compass className="h-6 w-6 text-[#0A84FF]" />,
      title: "Current Location",
      description:
        "Find your current location with one click and get detailed geographic information instantly.",
    },
    {
      icon: <Map className="h-6 w-6 text-[#0A84FF]" />,
      title: "Interactive Maps",
      description:
        "Explore locations with our interactive map interface, featuring smooth navigation and detailed views.",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#0A84FF]" />,
      title: "Address Details",
      description:
        "View comprehensive address information and geographic details for any location you select.",
    },
    {
      icon: <ExternalLink className="h-6 w-6 text-[#0A84FF]" />,
      title: "External Maps",
      description:
        "Open any location directly in Google Maps with a single click for additional navigation options.",
    },
  ];

  return (
    <section id="features" className="py-10 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-1 text-sm text-white/60 backdrop-blur-sm">
            <span className="mr-2 text-[#0A84FF]">✦</span> Feature-rich Platform
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful features for location discovery
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Our application offers a suite of tools to help you explore and
            understand geographic locations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent p-px transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="relative h-full rounded-2xl bg-black/50 p-6 backdrop-blur-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#0A84FF]/5 shadow-inner shadow-white/5">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
