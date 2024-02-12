/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public/pwa",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js",
  //...
});

const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  async redirects() {
    return [
      // Social redirect
      {
        source: "/instagram",
        destination: "https://www.instagram.com/digitaldesk.uae/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.instagram.com/digitaldesk.uae/",
        permanent: true,
      },
      {
        source: "/pinterest",
        destination: "https://www.instagram.com/digitaldesk.uae/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://www.instagram.com/digitaldesk.uae/",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.instagram.com/digitaldesk.uae/",
        permanent: true,
      },
      {
        source: "/shop/digital-printing-signage/signage/flex-board",
        destination: "https://www.digitaldesk.ae/d/flex-board",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  output: "standalone",
};

module.exports = withPWA(nextConfig);
