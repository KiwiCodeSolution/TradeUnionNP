import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Додаємо localhost до дозволених доменів
  },
};

export default withNextIntl(nextConfig);
