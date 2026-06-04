import { useTranslations } from "next-intl";
import { TgIcon } from "./icons/IconsComponents";

export default function TickerTelegram({ href = "https://t.me/PROFSPILKA_NP_BOT" }) {
  const t = useTranslations("BotsTexts");

  const MESSAGES = [t("telegram_header.0"), t("telegram_header.1"), t("telegram_header.2")];

  const ITEMS = [...MESSAGES, ...MESSAGES];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Перейти до Telegram-бота Профспілки"
      className="flex items-center w-full h-[38px] overflow-hidden bg-[#229ED9] no-underline cursor-pointer hover:brightness-90 group"
    >
      <div
        aria-hidden="true"
        className="flex whitespace-nowrap will-change-transform animate-ticker-left group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "60s" }}
      >
        {ITEMS.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[10px] px-7 text-[13px] font-semibold text-white tracking-[0.01em]"
          >
            <TgIcon />
            {text}
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white/40 ml-[18px] shrink-0" />
          </span>
        ))}
      </div>
    </a>
  );
}
