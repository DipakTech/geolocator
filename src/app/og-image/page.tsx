"use client";

import OgImage from "@/components/landing/OgImage";

export default function OgImagePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Instructions */}
      <div className="fixed left-0 top-0 m-4 max-w-md rounded-lg bg-white/10 p-4 text-white backdrop-blur-md">
        <h2 className="mb-2 text-lg font-bold">OG Image Generator</h2>
        <ol className="list-decimal pl-5">
          <li>
            Use browser developer tools to set viewport to exactly 1200×630px
          </li>
          <li>Take a screenshot of the rendered image below</li>
          <li>Save the screenshot as og-image.png in public/images/</li>
        </ol>
      </div>

      {/* OG Image Preview */}
      <OgImage />
    </div>
  );
}
