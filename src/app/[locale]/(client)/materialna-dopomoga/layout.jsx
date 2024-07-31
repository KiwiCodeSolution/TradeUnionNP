export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Матеріальна допомога | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Financial Aid | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/materialna-dopomoga",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Матеріальна допомога | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Financial Aid | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function FinancialAidLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
