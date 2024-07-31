export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Угода користувача сайту | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
        : "User Agreement | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uhoda-korystuvacha",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title:
        locale === "uk"
          ? "Угода користувача сайту | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»"
          : "User Agreement | Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
      url: "https://profspilka.org",
    },
  };
}

export default function UserAgreementLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
