import { roboto } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  description:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className="min-h-screen">
      <body className={roboto.className}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
