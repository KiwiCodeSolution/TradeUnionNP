export const metadata = {
  title: "Звернення | Всеукраїнська професійна спілка працівників ТОВ «НОВА ПОШТА»",
  description: "Звернення",
  content:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  metadataBase: new URL("https://profspilka.org"),
  alternates: {
    canonical: "https://profspilka.org/uk/zvernennya",
    languages: {
      "en-US": "/en",
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function AppealLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
