"use client";

import ErrorScreen from "@/components/ErrorScreen";
import { roboto } from "./[locale]/(client)/fonts";
import "./[locale]/(client)/globals.css";

// помилка в самому layout (шапка, футер, дані для них) замінює всю сторінку
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        <ErrorScreen error={error} />
      </body>
    </html>
  );
}
