import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "3000",
  //       pathname: "/images/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "5000",
  //       pathname: "/uploads/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "4000",
  //       pathname: "/uploads/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "4000",
  //       pathname: "/uploads_gallerey/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "5000",
  //       pathname: "/uploads_gallerey/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "kiwicode.digital",
  //       pathname: "/bc/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "kiwicode.digital",
  //       pathname: "/bc/uploads_gallerey/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "kiwicode.digital",
  //       pathname: "/bc/images/**",
  //     },
  //   ],
  // },
  // images: {
  //   domains: ["kiwicode.digital"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kiwicode.digital",
        pathname: "/bc/**",
      },
      {
        protocol: "https",
        hostname: "kiwicode.digital",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kiwicode.digital",
        pathname: "/bc/images/**",
      },
      {
        protocol: "https",
        hostname: "kiwicode.digital",
        pathname: "/bc/uploads/**",
      },
      {
        protocol: "https",
        hostname: "kiwicode.digital",
        pathname: "/bc/uploads_gallerey/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
