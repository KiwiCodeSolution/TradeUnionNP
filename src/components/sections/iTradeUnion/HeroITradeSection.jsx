import { useTranslations } from "next-intl";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import BgImage from "@/images/i-trade/np-arrow-white.svg";
import Title from "@/components/Title";
import HeroImage from "./HeroImage";
import { Blanc, Heart } from "@/components/icons/IconsComponents";
import Link from "next/link";

const ITEMS = [
  {
    text: "Профспілка — це",
    text_accent: "правовий захист",
    image: <Blanc />,
    link: "zakhyst-trudovykh-prav",
  },
  {
    text: "Профспілка — це",
    text_accent: "матеріальна допомога",
    image: <Blanc />,
    link: "/materialna-dopomoha",
  },
  {
    text: "Профспілка — це",
    text_accent: "спорт, відпочинок, дозвілля",
    image: <Heart />,
    link: "/dozvillya-ta-sport",
  },
];

const HeroITradeSection = () => {
  const t = useTranslations("I");
  return (
    <section className={"bg-bgGrey w-full pt-2 md:pt-6 pb-[410px] md:pb-[100px] relative"}>
      <Wrapper styles={"relative"}>
        <PathPage endPath={t(`path`)} />
        <div className="flex flex-col md:flex-row mt-5 md:mt-0 gap-y-2">
          <div className="w-full md:w-1/2 flex justify-center items-center xl:items-start gap-4 flex-col relative">
            <Image
              src={BgImage}
              width={262}
              height={355}
              className="absolute -top-5 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]"
              alt="білий логотип Профспілки Нова пошта на прозорому тлі"
            />
            <Title tag={"h1"} styles={"z-[2]"}>
              {t(`title.0`)} <span className="text-red">{t(`title.1`)}</span>
            </Title>
            <p className="text-lg z-[2]">
              <strong>{t(`subtitle.0`)} </strong> <br /> {t(`subtitle.1`)}
            </p>
            <p className="text-lg z-[2]">
              {t(`subtitle.2`)} <strong>{t(`subtitle.3`)}</strong> {t(`subtitle.4`)}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[256px] md:h-[355px] flex justify-end relative z-[3]">
            <HeroImage />
          </div>
        </div>
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-3 absolute -bottom-[510px] md:-bottom-[215px] xl:-bottom-[230px] md:left-0 md:w-full md:px-5 gap-4">
          {ITEMS.map((el, index) => (
            <article
              key={el.link}
              className="flex md:flex-col bg-white rounded-2xl px-6 md:px-0 py-8 md:justify-center items-center hover:bg-red text-red hover:text-white hover:scale-x-[1.1] hover:scale-y-[1.1] transform ease-linear transition-all gap-x-5 md:gap-4 fill-current shadow-2xl box-shadow hover:z-[20]"
            >
              {el.image}
              <div className="flex flex-col gap-4">
                <h3 className="text-main i-trade-text md:text-center">
                  {t(`list.${index}.text`)} <br />{" "}
                  <strong> {t(`list.${index}.text_accent`)} </strong>
                </h3>
                <Link
                  href={el.link}
                  className="i-trade-link text-red underline underline-offset-1 md:text-center"
                >
                  {t(`link`)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroITradeSection;
