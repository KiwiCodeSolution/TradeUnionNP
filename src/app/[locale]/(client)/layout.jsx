import Analytics from "@/components/Analytics";
import Header from "@/components/Header.jsx";
import { Providers } from "@/components/Providers";
import Footer from "@/components/sections/footer/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "react-hot-toast";
import { roboto } from "./fonts";
import "./globals.css";

import ButtonsWrapper from "@/components/ButtonsWrapper";
import { BaseURL } from "@/constants/BaseUrl";

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

async function fetchContacts() {
  const res = await fetch(`${BaseURL}contacts`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  const contacts = await fetchContacts();
  const [{ _id, __v, ...initialContacts }] = contacts;

  return (
    <html lang={locale} className="h-full">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Analytics />
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen ">
              <Header locale={locale} contacts={initialContacts} />

              {/* Контейнер для основного контенту */}
              <div className="flex-grow">{children}</div>
              <ButtonsWrapper locale={locale} contacts={initialContacts} />
              <Footer locale={locale} />
            </div>
            <Toaster />
            <div id="modal-root"></div>
          </NextIntlClientProvider>
        </Providers>
        s
      </body>
    </html>
  );
}
