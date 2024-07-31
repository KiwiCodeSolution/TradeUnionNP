import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function ClientLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <div lang={locale} className="min-h-screen">
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </div>
  );
}
