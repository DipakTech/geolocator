# SEO and Analytics Setup

This document explains the SEO and analytics setup for the GeoLocator application.

## SEO Configuration

SEO metadata is configured in two places:

1. **Root Layout (`src/app/layout.tsx`)** - Contains the primary metadata configuration for the entire application, including:

   - Page title and description
   - Open Graph metadata for social sharing
   - Twitter Card metadata

2. **Custom Head Component (`src/components/landing/Head.tsx`)** - A reusable component that can be imported into any page that needs custom SEO metadata.

## OG Image for Social Sharing

An Open Graph image is used when your site is shared on social media platforms. To create this image:

1. Run the development server: `npm run dev`
2. Visit http://localhost:6000/og-image in your browser
3. Use browser developer tools to set the viewport to exactly 1200×630px
4. Take a screenshot of the rendered image
5. Save the screenshot as `og-image.png` in the `public/images/` directory

## Umami Analytics Setup

Umami is a privacy-focused analytics tool. To complete the setup:

1. Open `src/app/layout.tsx`
2. Find the Umami Analytics Script section
3. Replace `your-umami-website-id` with your actual Umami website ID
4. Replace `https://analytics.yourdomain.com/umami.js` with your actual Umami script URL

```javascript
<Script
  async
  defer
  data-website-id="your-umami-website-id" // Replace with your umami website ID
  src="https://analytics.yourdomain.com/umami.js" // Replace with your umami script URL
  strategy="afterInteractive"
/>
```

If you don't have a Umami account yet:

1. Set up Umami by following their [official documentation](https://umami.is/docs/install)
2. Create a new website in your Umami dashboard
3. Get the website ID and script URL
4. Update the values in the layout file

## Customizing SEO Metadata

To customize the metadata for specific pages, you can:

1. Create page-specific metadata in App Router pages using the `generateMetadata` function
2. Or use the `SeoHead` component with custom props where needed
