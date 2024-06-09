import Header from "@/components/Header";
import { roboto } from "./fonts";
import "./globals.css";
import Footer from "@/components/sections/footer/Footer";

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
    <html lang="uk">
      <body className={roboto.className}>
        <Header />
        {children}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
