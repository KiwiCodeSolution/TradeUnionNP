import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Додаємо localhost до дозволених доменів
    // domains: ["kiwicode.tech"],
  },
};

export default withNextIntl(nextConfig);
