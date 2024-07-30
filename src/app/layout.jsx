import "@/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { roboto } from "./[locale]/fonts";

export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»"
        : "Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    description:
      locale === "uk"
        ? "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»"
        : "Official site of the Trade Union of the Nova Poshta group of companies | All-Ukrainian Professional Union of Employees of Nova Poshta LLC | VPSP 'Nova Poshta' LLC",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="min-h-screen">
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div id="modal-root"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
