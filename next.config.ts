import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/experience", destination: "/#experience", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      {
        source: "/certifications",
        destination: "/#certifications",
        permanent: false,
      },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
