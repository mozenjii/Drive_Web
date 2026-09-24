import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Static export. Every client page is prerendered to plain HTML at build time
   * and uploaded to one Cloudflare Pages project — no adapter, no Node runtime,
   * no per-client configuration. One project serves every preview.
   */
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // next/image's optimiser needs a server; a static export has none.
  images: { unoptimized: true },
};

export default nextConfig;
