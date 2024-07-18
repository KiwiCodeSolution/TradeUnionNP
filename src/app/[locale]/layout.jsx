import { roboto } from "./fonts";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  description:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="min-h-screen">
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div id="modal-root"></div>{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
