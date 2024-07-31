export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Захист трудових прав | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Protection of labor rights | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zakhyst-trudovykh-prav",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Захист трудових прав | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Protection of labor rights | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function ProtectionLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
