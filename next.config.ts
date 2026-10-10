import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://queenielodonia.netlify.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
