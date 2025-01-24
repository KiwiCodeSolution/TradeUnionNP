import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["localhost"], // Додаємо localhost до дозволених доменів
  //   // domains: ["kiwicode.tech"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Порт для зображень
        pathname: "/images/**", // Шлях до зображень
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000", // Порт для API
        pathname: "/uploads/**", // Шлях до API-запитів (якщо це потрібно)
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000", // Порт для API
        pathname: "/uploads_gallerey/**", // Шлях до API-запитів (якщо це потрібно)
      },
    ],
  },
};

export default withNextIntl(nextConfig);
