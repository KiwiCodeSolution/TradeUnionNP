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
    <section className={"bg-bgGrey w-full"}>
      <Wrapper styles={"relative pb-[100px]"}>
        <PathPage endPath={"Я - Профспілка"} />
        <div className="flex ">
          <div className="w-full sm:w-2/6 flex justify-center items-center gap-4 flex-col relative">
            <Image
              src={BgImage}
              width={262}
              height={355}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]"
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
          <div className="w-full sm:w-4/6 flex justify-end">
            <HeroImage />
          </div>
        </div>
        <div className="grid grid-cols-3 absolute -bottom-[100px] left-0 w-full px-5 gap-x-4">
          {ITEMS.map(el => (
            <article
              key={el.text}
              className="flex flex-col bg-white rounded-2xl py-8 justify-center items-center hover:bg-red text-red hover:text-white hover:scale-x-[1.2]  hover:scale-y-[1.2] transform ease-linear transition-all gap-4 fill-current shadow-sm box-shadow hover:z-[20]"
            >
              {el.image}
              <h3 className="text-main i-trade-text text-center">
                {el.text} <br /> <strong>{el.text_accent}</strong>
              </h3>
              <Link href={el.link} className="i-trade-link text-red underline underline-offset-1">
                Детальніше
              </Link>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroITradeSection;
