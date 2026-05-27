import BaseSection from "@/components/BaseSection";

import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";
import Image from "next/image";

const LinkBlock = ({ linkText, title, channels, noLink }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h5 className="mb-4 text-xl font-semibold text-grey text-center xl:text-left">{title}</h5>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {channels.map(el => (
          <Link
            href={el.link}
            key={el.id}
            className="w-full flex flex-col items-center justify-between group hover:scale-[1.03] transform transition-all ease-linear gap-y-2 bg-white rounded-2xl px-6 py-4 border border-red/20 shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-red overflow-hidden flex items-center justify-center">
              <Image src={el.icon} alt={`${el.name} icon`} width={24} height={24} />
            </div>
            <p className="text-xl font-semibold text-center">{el.name}</p>
            <p className="text-grey text-center">{el.text}</p>
            {!noLink && <p className="text-red font-semibold group-hover:scale-105">{linkText}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Channels = ({ contacts }) => {
  const t = useTranslations("I");
  const firstChannels = [
    {
      id: "1111",
      name: t(`channels.0`),
      icon: "/images/soc-icons/facebook-white.svg",
      link: contacts.facebook,
      text: t(`channels_text.0`),
    },
    {
      id: "1112",
      name: t(`channels.1`),
      icon: "/images/soc-icons/instagram-white.svg",
      link: contacts.instagram,
      text: t(`channels_text.1`),
    },
    {
      id: "1113",
      name: t(`channels.2`),
      icon: "/images/soc-icons/youtube-white.svg",
      link: contacts.youtube,
      text: t(`channels_text.2`),
    },
  ];

  const secondChannels = [
    {
      id: "2111",
      name: t(`channels.3`),
      icon: "/images/soc-icons/telegram-white.svg",
      link: contacts.telegram,
      text: t(`channels_text.3`),
    },
    {
      id: "2112",
      name: t(`channels.4`),
      icon: "/images/soc-icons/viber-white.svg",
      link: contacts.viber,
      text: t(`channels_text.4`),
    },
    {
      id: "3111",
      name: t(`channels.6`),
      icon: "/images/mail-white.svg",
      link: "mailto:" + contacts.mail,
      text: contacts.mail,
    },
  ];

  const thirdChannels = [
    {
      id: "2113",
      name: t(`channels.5`),
      icon: "/images/whatsapp-white.svg",
      link: contacts.whatsapp ?? "#",
      text: t(`channels_text.5`),
    },
    {
      id: "3112",
      name: t(`channels.7`),
      icon: "/images/phone-white.svg",
      link: contacts.phone ?? "+380445911111",
      text: contacts.phone ?? "+38 (044) 591-11-11",
    },
    {
      id: "3113",
      name: t(`channels.8`),
      icon: "/images/location-white.svg",
      link: "#",
      text: t(`channels_text.8`),
    },
  ];

  const channelsTitles = [
    t(`channels_subtitles.0`),
    t(`channels_subtitles.1`),
    t(`channels_subtitles.2`),
  ];
  const title = t(`channels_title`)
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return (
          <span key={index} className="text-red">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  return (
    <BaseSection style={"py-16 bg-bgGrey"} id={"channels"}>
      <div className="absolute top-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />{" "}
      <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-b from-bgGrey to-white" />
      <Wrapper styles={"relative mt-5 z-[10]"}>
        <Title tag={"h2"} styles={"text-center"}>
          {title}
        </Title>
        <Title tag={"h3"} styles={"text-center mt-4"}>
          {t(`channels_subtitle`)}
        </Title>
        <div className="w-full flex flex-col gap-y-6 xl:gap-y-10 mt-9 xl:mt-12 pb-4">
          <LinkBlock
            linkText={t(`channels_link_text`)}
            title={channelsTitles[0]}
            channels={firstChannels}
          />
          <LinkBlock
            linkText={t(`channels_link_text`)}
            title={channelsTitles[1]}
            channels={secondChannels}
          />
          {/* <LinkBlock
            linkText={t(`channels_link_text`)}
            title={channelsTitles[2]}
            channels={thirdChannels}
            noLink
          /> */}
        </div>
      </Wrapper>
    </BaseSection>
  );
};
export default Channels;
