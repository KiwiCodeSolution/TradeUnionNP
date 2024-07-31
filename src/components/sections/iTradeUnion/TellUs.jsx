import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const TellUs = () => {
  const t = useTranslations("I");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"pt-32 pb-20 z-[10] relative"}>
        <Title tag={"h2"} styles={"text-center"}>
          {t(`tell_title.0`)} {t(`tell_title.1`)} <br />
          <span className="text-red ">{t(`tell_title.2`)}</span>
          {/* <span className="hidden md:block text-red">
            {t(`tell_title.1`)} <br /> {t(`tell_title.2`)}
          </span> */}
        </Title>
        <p className="text-lg mt-5 text-grey text-center">{t(`tell_text`)}</p>
        <ul className="w-full flex flex-wrap pt-16 justify-center gap-4">
          <li>
            <a href="https://www.instagram.com/profspilka.np/">
              <Image
                className="w-16 md:w-32 xl:w-28 shinstagram relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/instagram-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC7Q1wWqpmQzpCcHcvIy-13A">
              <Image
                className="w-16 md:w-32 xl:w-28 shyoutobe relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/youtube-color_1.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/profspilka_np">
              <Image
                className="w-16 md:w-32 xl:w-28 shtelegram relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/telegram-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profspilka.novaposhta">
              <Image
                className="w-16 md:w-32 xl:w-28 shfacebook relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/facebook-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://invite.viber.com/?g2=AQB5jyDD9hRH2E4T1sgP3mF5DLFT3M6rGUUWfv2%2FHB1AddnNt8Vy6o2DXH793wQk">
              <Image
                className="w-16 md:w-32 xl:w-28 shviber relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/viber-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.messenger.com/">
              <Image
                className="w-16 md:w-32 xl:w-28 shmessanger relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/messanger-color.svg"
              />
            </a>
          </li>
        </ul>
      </Wrapper>
      <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />
    </BaseSection>
  );
};

export default TellUs;
