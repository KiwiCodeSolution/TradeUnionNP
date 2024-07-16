import { roboto } from "./fonts";
import "./globals.css";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";

export const metadata = {
  title: "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  description:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  console.log("locale", locale);
  return (
    <html lang={locale} dir={dir(locale)} className="min-h-screen">
      <body className={roboto.className}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
