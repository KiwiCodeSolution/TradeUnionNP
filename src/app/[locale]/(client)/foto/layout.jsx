export const metadata = {
  title: "Фото | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»",
  // description: "Звернення",
  content:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  metadataBase: new URL("https://profspilka.org"),
  alternates: {
    canonical: "https://profspilka.org/uk/foto",
    languages: {
      "en-US": "/en",
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    title: "Фото | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»",
    // description: "Звернення",
    images: "/og-image.png",
    url: "https://profspilka.org",
  },
};

export default function PhotoLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
