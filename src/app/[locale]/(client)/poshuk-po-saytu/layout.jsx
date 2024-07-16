export const metadata = {
  title: "Результат пошуку по сайту | ВПСП ТОВ «Нова Пошта»",
  description: "Результат пошуку по сайту | ВПСП ТОВ «Нова Пошта»",
  content:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  metadataBase: new URL("https://profspilka.org"),
};

export default function SearchLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
