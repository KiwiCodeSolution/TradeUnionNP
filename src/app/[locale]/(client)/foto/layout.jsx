export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Фото | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "Photo Reports | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/foto",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Фото | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "Photo Reports | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function PhotoLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
