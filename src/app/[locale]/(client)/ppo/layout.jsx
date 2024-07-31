export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Обласні осередки | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Regional cells | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/ppo",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Обласні осередки | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Regional cells | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function RegionalCellsLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
