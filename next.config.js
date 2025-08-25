const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== "development",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sosniegorne.pl",
          },
        ],
        destination: "https://www.sosniegorne.pl/:path*",
        permanent: true,
      },
    ];
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA(nextConfig);
