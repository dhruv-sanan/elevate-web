import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days in seconds
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for various components
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Allow images from local public folder
    unoptimized: false,
  },
  // Enable static page caching headers
  headers: async () => [
    // Cache all pages for 5 minutes, serve stale for 1 hour while revalidating
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300, stale-while-revalidate=3600',
        },
      ],
    },
    // Cache static assets (images, fonts, etc.) for 1 year
    {
      source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // Cache JS and CSS bundles for 1 year (they have hashed filenames)
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
