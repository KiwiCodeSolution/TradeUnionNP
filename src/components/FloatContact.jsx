"use client";

import { useEffect, useState } from "react";
import { IconChat, IconClose, IconTelegram, IconViber, VbIcon } from "./icons/IconsComponents";
import { observer } from "mobx-react-lite";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import { toJS } from "mobx";

const FloatContactComponent = observer(({ tgHref, vbHref, tgTitle, vbTitle }) => {
  const { contactsStore } = useStore();
  const allContacts = toJS(contactsStore.contacts);
  const [open, setOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [botsLinks, setBotsLinks] = useState({
    telegram: tgHref,
    viber: vbHref,
  });

  useEffect(() => {
    setIsClient(true); // Дозволяємо рендер тільки на клієнті
  }, []);

  useEffect(() => {
    if (!contactsStore.isLoading && !contactsStore.contacts?.length) {
      contactsStore.fetchContacts();
    }
  }, [contactsStore]);

  // useEffect(() => {
  //   if (allContacts && allContacts.length > 0) {
  //     const [{ _id, __v, ...initialContacts }] = allContacts;
  //     setBotsLinks(prevLinks =>
  //       prevLinks.find(link => ({
  //         ...link,
  //         link: initialContacts[link.title] || link.link,
  //       }))
  //     );
  //   }
  // }, [contactsStore.contacts]);

  return (
    <div
      className="flex flex-col items-end gap-[10px] z-[1000]"
      role="region"
      aria-label="Зв'язок з ботами"
    >
      {/* Telegram */}
      <div
        className={`flex items-center gap-[10px] transition-all duration-[220ms] delay-[40ms]
        ${open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-[10px] scale-[0.88] pointer-events-none"}`}
      >
        <span className="bg-white text-xs font-semibold px-[13px] py-[5px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.13)] whitespace-nowrap">
          {tgTitle}
        </span>
        <a
          href={botsLinks.telegram}
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
        className={`flex items-center gap-[10px] transition-all duration-[220ms] delay-0
        ${open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-[10px] scale-[0.88] pointer-events-none"}`}
      >
        <span className="bg-white text-xs font-semibold px-[13px] py-[5px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.13)] whitespace-nowrap">
          {vbTitle}
        </span>
        <a
          href={botsLinks.viber}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Viber-бот Профспілки"
          tabIndex={open ? 0 : -1}
          className="w-12 h-12 rounded-full bg-[#7360F2] flex items-center justify-content-center text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:scale-[1.08] transition-transform shrink-0 justify-center"
        >
          <VbIcon className="!w-6 !h-6" />
        </a>
      </div>

      {/* Головна кнопка */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={open ? "Закрити канали зв'язку" : "Відкрити канали зв'язку"}
        className="relative w-[50px] h-[50px] rounded-full bg-red hover:shadow-md active:scale-95 border-none cursor-pointer flex items-center justify-center text-white shadow-[0_4px_20px_rgba(237,28,36,0.35)] transition-all duration-200 hover:scale-105 animate-pulse-ring"
      >
        {/* іконка чату */}
        <span
          className={`absolute flex items-center justify-center transition-all duration-200
          ${open ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
        >
          <IconChat />
        </span>
        {/* іконка закриття */}
        <span
          className={`absolute flex items-center justify-center transition-all duration-200
          ${open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
        >
          <IconClose />
        </span>
      </button>
    </div>
  );
});

export default function FloatContact({
  tgHref = "https://t.me/PROFSPILKA_NP_BOT",
  vbHref = "viber://pa?chatURI=ЗАМІНИ",
  tgTitle = "Telegram-бот",
  vbTitle = "Viber-бот",
}) {
  return (
    <StoreProvider>
      <FloatContactComponent tgHref={tgHref} vbHref={vbHref} tgTitle={tgTitle} vbTitle={vbTitle} />
    </StoreProvider>
  );
}
