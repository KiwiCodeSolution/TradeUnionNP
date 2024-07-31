export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Колективний договір | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Collective Agreement | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/kolektyvnyy-dohovir",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Колективний договір | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Collective Agreement | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function CollectiveAgreementLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
