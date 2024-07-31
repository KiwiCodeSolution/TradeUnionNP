import "@/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { roboto } from "./[locale]/fonts";

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
