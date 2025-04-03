import React from "react";
import Head from "next/head";

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SeoHead = ({
  title = "GeoLocator - Find any location with precision",
  description = "Explore the world with our powerful location search and mapping tool. Get exact coordinates, detailed information, and interactive maps in one beautiful interface.",
  canonicalUrl = "https://geoLocator.oneclickresult.com",
  ogImage = "/images/og-image.png",
}: SeoHeadProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Umami Analytics Script */}
      <script
        async
        defer
        data-website-id="fc436598-61cc-4dcd-b4f4-dce359341025" // Replace with your umami website ID
        src="https://analytics.oneclickresult.com/script.js" // Replace with your umami script URL
      />
    </Head>
  );
};

export default SeoHead;
