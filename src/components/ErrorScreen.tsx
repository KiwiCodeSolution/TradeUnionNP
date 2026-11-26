"use client";

import Image from "next/image";
import { useEffect } from "react";

const TEXTS = {
  uk: {
    title: "Щось пішло не так",
    description: "Не вдалося завантажити сторінку. Спробуйте оновити її трохи пізніше.",
    retry: "Оновити сторінку",
    home: "На головну",
  },
  en: {
    title: "Something went wrong",
    description: "The page failed to load. Please try again a bit later.",
    retry: "Reload page",
    home: "Home page",
  },
};

const BUTTON =
  "w-full tablet:w-auto px-10 h-14 flex items-center justify-center rounded-lg border border-red text-lg font-bold";

// next-intl може бути недоступний (впав сам layout), тому тексти тут, а мова — з адреси
export default function ErrorScreen({ error }: { error: Error }) {
  const isEnglish = typeof window !== "undefined" && /^\/en(\/|$)/.test(window.location.pathname);
  const text = isEnglish ? TEXTS.en : TEXTS.uk;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center gap-y-8 min-h-[70vh] px-4 py-10 text-center">
      <Image
        src="/images/logo.svg"
        alt="Профспілка працівників Нової пошти"
        width={220}
        height={80}
        className="h-auto"
      />
      <h1 className="text-3xl desktop:text-5xl font-bold text-main">{text.title}</h1>
      <p className="max-w-xl text-lg text-grey">{text.description}</p>
      <div className="flex flex-col tablet:flex-row gap-4 w-full tablet:w-auto">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className={`${BUTTON} bg-red text-white hover:shadow-redButtonHover`}
        >
          {text.retry}
        </button>
        {/* звичайне посилання: повне перезавантаження скидає зламаний стан */}
        <a
          href={isEnglish ? "/en" : "/uk"}
          className={`${BUTTON} text-red hover:bg-red hover:text-white`}
        >
          {text.home}
        </a>
      </div>
    </main>
  );
}
