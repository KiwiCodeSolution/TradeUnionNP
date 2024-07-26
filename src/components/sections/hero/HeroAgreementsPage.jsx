import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import agreements from "@/data/agreements.json";
import Image from "next/image";
import Done from "@/images/agreement/done.svg";
import HeroImage from "@/images/agreement/hand.svg";
import BookMark from "@/images/agreement/bookmark-logo.svg";
import Arrow from "@/images/arrow_white.svg";
import Title from "@/components/Title";

const HeroAgreementsPage = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <div className="w-full flex flex-col gap-y-8 my-16 bg-white rounded-2xl px-4 md:px-14 py-10 relative">
          <Image
            src={BookMark}
            width={140}
            height={163}
            alt="червона закладка із білим логотипом Профспілки Нової пошти"
            className="w-20 md:w-[110px] xl:w-[140px] absolute top-0 right-8 -translate-y-8"
          />
          <Title tag="h2">
            Колективний <span className="text-red">договір</span>
          </Title>

          <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            {agreements.slice(0, 7).map(el => (
              <li key={el} className="text-[15px] flex md:flex-col gap-4 md:pr-2">
                <Image
                  src={Done}
                  width={32}
                  height={32}
                  alt="червоний прапорець у червоному колі"
                />
                {el}
              </li>
            ))}
          </ul>
          <ul className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {agreements.slice(7, 10).map(el => (
              <li key={el} className="text-[15px] flex md:flex-col gap-4 md:pr-2">
                <Image
                  src={Done}
                  width={32}
                  height={32}
                  alt="червоний прапорець у червоному колі"
                />
                {el}
              </li>
            ))}
          </ul>
          <Image
            src={HeroImage}
            width={468}
            height={395}
            alt="зображення анкети чи бланку договору та руки із ручкою"
            className="hidden md:block w-[320px] xl:w-[468px] right-9 absolute bottom-0 xl:right-16"
          />
          <a
            href="/files/koldogovor.pdf"
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 mt-8 flex items-center justify-center mx-auto md:ml-0"
          >
            переглянути
            <Image
              src={Arrow}
              width={30}
              height={30}
              alt="зображення червоної іконки-стрілочки вправо на білому фоні"
              className="arrow-icon"
            />
          </a>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAgreementsPage;
