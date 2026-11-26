"use client";

import ErrorScreen from "@/components/ErrorScreen";

// помилка всередині сторінки: шапка й футер лишаються
export default function Error({ error }: { error: Error }) {
  return <ErrorScreen error={error} />;
}
