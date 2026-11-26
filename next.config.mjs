import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint runs separately (`npm run lint`) until existing warnings are cleaned up;
  // a lint error must not break the production build on the server.
  eslint: { ignoreDuringBuilds: true },
  // API is called at profspilka.org, so pages opened on www are blocked by CORS.
  // Temporary (not permanent) until nginx does this redirect itself.
  async redirects() {
    return [
      { type: "host", value: "www.profspilka.org" },
      { type: "header", key: "x-forwarded-host", value: "www.profspilka.org" },
    ].map(condition => ({
      source: "/:path*",
      has: [condition],
      destination: "https://profspilka.org/:path*",
      permanent: false,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/public/images/ppo/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/ppo_images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/images/ppo/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/ppo_images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads_gallerey/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads_gallerey/**",
      },

      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/images/ppo/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/ppo_images/**",
      },

      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/bc/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/bc/images/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/bc/images/ppo/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/bc/uploads/**",
      },
      {
        protocol: "https",
        hostname: "profspilka.org",
        pathname: "/bc/uploads_gallerey/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
