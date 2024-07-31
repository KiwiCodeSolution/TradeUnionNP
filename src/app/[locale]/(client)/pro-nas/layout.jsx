export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Про нас | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "About the Trade Union | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/pro-nas",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Про нас | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "About the Trade Union | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function AboutUsLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
