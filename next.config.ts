import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";
const withToolbar = (config: object) => withVercelToolbar()(config);

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    reactCompiler: true,
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ["lucide-react", "date-fns"],
    // authInterrupts: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "127.0.0.1",
        protocol: "http",
      },
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
    ],
  },
};

export default withToolbar(nextConfig);
