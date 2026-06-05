"use client";

import { VbIcon } from "./icons/IconsComponents";

export default function TickerViber({ messages, link }) {
  const MESSAGES = [messages[0], messages[0], messages[0]];

  const ITEMS = [...MESSAGES, ...MESSAGES];
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Перейти до Viber-бота Профспілки"
      className="flex items-center w-full h-[38px] overflow-hidden bg-[#7360F2] no-underline cursor-pointer hover:brightness-90 group"
    >
      <div
        aria-hidden="true"
        className="flex whitespace-nowrap will-change-transform animate-ticker-right group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "58s" }}
      >
        {ITEMS.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[10px] px-7 text-[13px] font-semibold text-white tracking-[0.01em]"
          >
            <VbIcon />
            {text}
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white/40 ml-[18px] shrink-0" />
          </span>
        ))}
      </div>
    </a>
  );
}
