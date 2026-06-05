import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* ─── Квадратна картка соцмережі з тематичним кольором ─── */
const SocCard = ({ href, icon, name, hint, iconBg, iconColor }) => (
  <Link
    href={href}
    className="flex flex-col items-center gap-2 bg-white rounded-2xl px-3 py-4
               border border-red/10 shadow-itemShadow
               hover:scale-[1.03] transition-all ease-linear"
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: iconBg }}
    >
      <Image src={icon} alt={name} width={20} height={20} style={{ filter: iconColor }} />
    </div>
    <p className="font-bold text-main text-center leading-tight">{name}</p>
    <p className=" text-grey text-center">{hint}</p>
  </Link>
);

/* ─── Широка картка (Сайт) ─── */
const SocCardWide = ({ href, icon, name, hint, iconBg, iconColor }) => (
  <Link
    href={href}
    className="flex flex-col md:flex-row items-center justify-center gap-3 bg-white rounded-2xl px-5 py-4
               border border-red/10 shadow-itemShadow
               hover:scale-[1.02] transition-all ease-linear"
  >
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: iconBg }}
    >
      <Image src={icon} alt={name} width={20} height={20} style={{ filter: iconColor }} />
    </div>
    <div className="text-center md:text-left">
      <p className="font-bold text-main leading-tight">{name}</p>
      <p className=" text-grey">{hint}</p>
    </div>
  </Link>
);

/* ─── Великі картки ботів з тематичним кольором ─── */
const BotCard = ({ href, icon, name, hint, bg, shadow }) => (
  <Link
    href={href}
    className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5
               hover:scale-[1.03] transition-all ease-linear"
    style={{ background: bg, boxShadow: shadow }}
  >
    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
      <Image src={icon} alt={name} width={24} height={24} />
    </div>
    <p className="font-bold text-white text-center leading-tight">{name}</p>
    <p className=" text-white/70 text-center">{hint}</p>
  </Link>
);

/* ─── Label ─── */
const SectionLabel = ({ text }) => (
  <Title tag="h4" styles="font-bold mb-6">
    {text}
  </Title>
);

/* ════════════════════════════════
   ГОЛОВНИЙ КОМПОНЕНТ
════════════════════════════════ */
const Channels = ({ contacts }) => {
  const t = useTranslations("I");

  const bots = [
    {
      id: "bot-tg",
      name: t("channels.3"),
      icon: "/images/soc-icons/telegram-white.svg",
      href: contacts.telegrambot ?? contacts.telegram,
      hint: t("channels_text.3"),
      bg: "#229ED9",
      shadow: "0px 10px 30px 0px rgba(34,158,217,0.35)",
    },
    {
      id: "bot-vb",
      name: t("channels.4"),
      icon: "/images/soc-icons/viber-white.svg",
      href: contacts.viberbot ?? contacts.viber,
      hint: t("channels_text.4"),
      bg: "#7360F2",
      shadow: "0px 10px 30px 0px rgba(115,96,242,0.35)",
    },
  ];

  // FB, IG, Viber-спільнота, Telegram-канал, Email, YouTube
  const socials = [
    {
      id: "soc-fb",
      name: t("channels.0"),
      icon: "/images/soc-icons/facebook-white.svg",
      href: contacts.facebook,
      hint: t("channels_text.0"),
      iconBg: "#1877F2",
      iconColor: "none", // білий svg
    },
    {
      id: "soc-ig",
      name: t("channels.1"),
      icon: "/images/soc-icons/instagram-white.svg",
      href: contacts.instagram,
      hint: t("channels_text.1"),
      iconBg: "linear-gradient(135deg, #FFDC80 0%, #F77737 30%, #C13584 65%, #833AB4 100%)",
      iconColor: "none",
    },
    {
      id: "soc-vbc",
      name: t("channels.9"),
      icon: "/images/soc-icons/viber-white.svg",
      href: contacts.viber_community ?? contacts.viber,
      hint: t("channels_text.9"),
      iconBg: "#7360F2",
      iconColor: "none",
    },
    {
      id: "soc-tg",
      name: t("channels.10"),
      icon: "/images/soc-icons/telegram-white.svg",
      href: contacts.telegram,
      hint: t("channels_text.10"),
      iconBg: "#229ED9",
      iconColor: "none",
    },
    {
      id: "soc-em",
      name: t("channels.6"),
      icon: "/images/mail-white.svg",
      href: "mailto:" + contacts.mail,
      hint: contacts.mail,
      iconBg: "#34A853",
      iconColor: "none",
    },
    {
      id: "soc-yt",
      name: t("channels.2"),
      icon: "/images/soc-icons/youtube-white.svg",
      href: contacts.youtube,
      hint: t("channels_text.2"),
      iconBg: "#FF0000",
      iconColor: "none",
    },
  ];

  return (
    <BaseSection style="py-16 bg-bgGrey" id="channels">
      <div className="absolute top-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />
      <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-b from-bgGrey to-white" />

      <Wrapper styles="relative mt-5 z-[10]">
        {/* Боти */}
        <SectionLabel text={t("channels_bots_label")} />
        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-10">
          {bots.map(b => (
            <BotCard key={b.id} {...b} />
          ))}
        </div>

        {/* Соцмережі 3×2 */}
        <SectionLabel text={t("channels_socials_label")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-[10px] md:gap-4 md:mb-4">
          {socials.map(s => (
            <SocCard key={s.id} {...s} />
          ))}
        </div>

        {/* Сайт — широка картка */}
        <SocCardWide
          href="https://profspilka.org/uk"
          icon="/images/site-icon-white.svg"
          name={t("channels.11")}
          hint="profspilka.org"
          iconBg="#1A5FCC"
          iconColor="none"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Channels;
