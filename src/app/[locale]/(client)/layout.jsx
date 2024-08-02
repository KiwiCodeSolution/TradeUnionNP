import Header from "@/components/Header.jsx";
import Footer from "@/components/sections/footer/Footer";
import UpButton from "@/components/UI/buttons/UpButton";
import { getTranslations } from "next-intl/server";

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

export default function ClientLayout({ children, params: { locale } }) {
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <UpButton />
    </div>
  );
}
