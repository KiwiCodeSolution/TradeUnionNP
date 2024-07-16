export const metadata = {
  title: "Угода користувача сайту | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»",
  // description: "Звернення",
  content:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  metadataBase: new URL("https://profspilka.org"),
  alternates: {
    canonical: "https://profspilka.org/uhoda-korystuvacha",
    languages: {
      "en-US": "/en",
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    title: "Угода користувача сайту | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»",
    // description: "Звернення",
    images: "/og-image.png",
    url: "https://profspilka.org",
  },
};

export default function UserAgreementLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
