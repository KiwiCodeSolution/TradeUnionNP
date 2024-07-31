export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Дозвілля та спорт | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Sports and leisure | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/dozvillya-ta-sport",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Дозвілля та спорт | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Sports and leisure | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function RecreationLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
