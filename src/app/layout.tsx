import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GeoLocator - Find any location with precision",
  description:
    "Explore the world with our powerful location search and mapping tool. Get exact coordinates, detailed information, and interactive maps in one beautiful interface.",
  metadataBase: new URL("https://geoLocator.oneclickresult.com"),
  openGraph: {
    title: "GeoLocator - Find any location with precision",
    description:
      "Explore the world with our powerful location search and mapping tool. Get exact coordinates, detailed information, and interactive maps in one beautiful interface.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeoLocator App Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoLocator - Find any location with precision",
    description:
      "Explore the world with our powerful location search and mapping tool. Get exact coordinates, detailed information, and interactive maps in one beautiful interface.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}
      >
        {children}
        {/* Umami Analytics Script */}
        <Script
          async
          defer
          data-website-id="fc436598-61cc-4dcd-b4f4-dce359341025" // Replace with your umami website ID
          src="https://analytics.oneclickresult.com/script.js" // Replace with your umami script URL
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
