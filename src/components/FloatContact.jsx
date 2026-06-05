"use client";

import { useState } from "react";
import { IconChat, IconClose, IconTelegram, VbIcon } from "./icons/IconsComponents";
import { StoreProvider } from "@/store/StoreProvider";
import { useBotLinks } from "@/hooks/useBotLinks";

const FloatContactComponent = ({ tgTitle, vbTitle, contacts }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-end gap-[10px] z-[1000]"
      role="region"
      aria-label="Зв'язок з ботами"
    >
      {/* Telegram */}
      <div
        className={`flex items-center gap-[10px] transition-all duration-[220ms] delay-[40ms]
        ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-[10px] scale-[0.88] pointer-events-none"
        }`}
      >
        <span className="bg-white text-xs font-semibold px-[13px] py-[5px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.13)] whitespace-nowrap">
          {tgTitle}
        </span>

        <a
          href={contacts.telegrambot ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram-бот Профспілки"
          tabIndex={open ? 0 : -1}
          className="w-12 h-12 rounded-full bg-[#229ED9] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:scale-[1.08] transition-transform shrink-0"
        >
          <IconTelegram />
        </a>
      </div>

      {/* Viber */}
      <div
        className={`flex items-center gap-[10px] transition-all duration-[220ms]
        ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-[10px] scale-[0.88] pointer-events-none"
        }`}
      >
        <span className="bg-white text-xs font-semibold px-[13px] py-[5px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.13)] whitespace-nowrap">
          {vbTitle}
        </span>

        <a
          href={contacts.viberbot ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Viber-бот Профспілки"
          tabIndex={open ? 0 : -1}
          className="w-12 h-12 rounded-full bg-[#7360F2] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:scale-[1.08] transition-transform shrink-0 "
        >
          <VbIcon className="!w-6 !h-6" />
        </a>
      </div>

      {/* кнопка */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={open ? "Закрити канали зв'язку" : "Відкрити канали зв'язку"}
        className="relative w-[50px] h-[50px] rounded-full bg-red hover:shadow-md active:scale-95 border-none cursor-pointer flex items-center justify-center text-white shadow-[0_4px_20px_rgba(237,28,36,0.35)] transition-all duration-200 hover:scale-105 animate-pulse-ring"
      >
        <span
          className={`absolute flex items-center justify-center transition-all duration-200
          ${open ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
        >
          <IconChat />
        </span>

        <span
          className={`absolute flex items-center justify-center transition-all duration-200
          ${open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
        >
          <IconClose />
        </span>
      </button>
    </div>
  );
};

export default function FloatContact({
  tgTitle = "Telegram-бот",
  vbTitle = "Viber-бот",
  contacts,
}) {
  return (
    <StoreProvider>
      <FloatContactComponent tgTitle={tgTitle} vbTitle={vbTitle} contacts={contacts} />
    </StoreProvider>
  );
}
