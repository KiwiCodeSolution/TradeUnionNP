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
  return (
    <section className={"bg-bgGrey w-full pt-2 md:pt-6 pb-[410px] md:pb-[100px] relative"}>
      <Wrapper styles={""}>
        <PathPage endPath={"Я - Профспілка"} />
        <div className="flex flex-col md:flex-row mt-5 md:mt-0 gap-y-2">
          <div className="w-full md:w-1/2 flex justify-center items-center gap-4 flex-col relative">
            <Image
              src={BgImage}
              width={262}
              height={355}
              className="absolute -top-5 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]"
              alt="білий логотип Профспілки Нова пошта на прозорому тлі"
            />
            <Title tag={"h1"} styles={"z-[2]"}>
              Я — <span className="text-red">Профспілка</span>
            </Title>
            <p className="text-lg z-[2]">
              <strong>Ти — Профспілка. </strong> <br /> Ми об'єднуємося, щоб змінювати на краще
              умови праці
            </p>
            <p className="text-lg z-[2]">
              Тут <strong>захищають права та інтереси</strong> профспілчан групи компаній “Нова
              Пошта”
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[256px] md:h-[355px] flex justify-end relative z-[3]">
            <HeroImage />
          </div>
        </div>
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-3 absolute -bottom-[100px] md:-bottom-[120px] xl:-bottom-[100px] md:left-0 md:w-full md:px-5 gap-4">
          {ITEMS.map(el => (
            <article
              key={el.text + el.link}
              className="flex md:flex-col bg-white rounded-2xl px-6 md:px-0 py-8 md:justify-center items-center hover:bg-red text-red hover:text-white hover:scale-x-[1.2] hover:scale-y-[1.2] transform ease-linear transition-all gap-x-5 md:gap-4 fill-current shadow-2xl box-shadow hover:z-[20]"
            >
              {el.image}
              <div className="flex flex-col gap-4">
                <h3 className="text-main i-trade-text md:text-center">
                  {el.text} <br /> <strong>{el.text_accent}</strong>
                </h3>
                <Link href={el.link} className="i-trade-link text-red underline underline-offset-1">
                  Детальніше
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
