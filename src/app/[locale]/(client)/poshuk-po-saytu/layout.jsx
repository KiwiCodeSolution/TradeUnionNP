export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Результат пошуку по сайту | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Site search result | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zvernennya",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
  };
}

export default function SearchLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
