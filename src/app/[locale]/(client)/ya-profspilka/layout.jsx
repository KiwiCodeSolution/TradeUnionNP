export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Я-профспілка | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "I am the Trade Union | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/ya-profspilka",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Я-профспілка | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "I am the Trade Union | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function TradeUnionistLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
