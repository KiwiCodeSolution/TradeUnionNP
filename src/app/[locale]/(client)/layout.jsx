import Header from "@/components/Header.jsx";
import Footer from "@/components/sections/footer/Footer";
import UpButton from "@/components/UI/buttons/UpButton";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { roboto } from "./fonts";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Home_Page"),
    description: t("Root.Description"),
    content: t("Root.Content"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zvernennya",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Home_Page"),
      url: "https://profspilka.org",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen">
              <Header locale={locale} />

              {/* Контейнер для основного контенту */}
              <div className="flex-grow">{children}</div>

              <Footer locale={locale} />
              <UpButton />
            </div>
            <Toaster />
            <div id="modal-root"></div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
