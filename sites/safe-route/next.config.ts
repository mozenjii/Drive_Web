import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Not using `output: 'export'` on purpose — every prospect page is still
  // statically generated via generateStaticParams, but keeping the Node
  // runtime available means booking/payment API routes can be added later
  // without restructuring the project.
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/site.html' },
        { source: '/meridian-riverside', destination: '/site.html' },
        { source: '/golden-state-sacramento', destination: '/site.html' },
        { source: '/apex-bakersfield', destination: '/site.html' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
