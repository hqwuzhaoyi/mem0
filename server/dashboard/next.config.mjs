/** @type {import(next).NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizePackageImports: ["@/components", "@/lib", "@/utils"],
  },
  compress: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/settings",
        destination: "/dashboard/settings",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    const apiUrl = "http://mem0:8000";
    return [
      {
        source: "/auth/:path*",
        destination: `${apiUrl}/auth/:path*`,
      },
      {
        source: "/memories/:path*",
        destination: `${apiUrl}/memories/:path*`,
      },
      {
        source: "/search/:path*",
        destination: `${apiUrl}/search/:path*`,
      },
      {
        source: "/configure/:path*",
        destination: `${apiUrl}/configure/:path*`,
      },
      {
        source: "/api-keys/:path*",
        destination: `${apiUrl}/api-keys/:path*`,
      },
      {
        source: "/requests/:path*",
        destination: `${apiUrl}/requests/:path*`,
      },
      {
        source: "/entities/:path*",
        destination: `${apiUrl}/entities/:path*`,
      },
    ];
  },
};

export default nextConfig;
