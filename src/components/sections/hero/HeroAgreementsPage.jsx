import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Done from "@/images/agreement/done.svg";
import HeroImage from "@/images/agreement/hand.svg";
import BookMark from "@/images/agreement/bookmark-logo.svg";
import Arrow from "@/images/arrow_white.svg";
import Title from "@/components/Title";
import { BaseURL } from "@/constants/BaseUrl";
import FileButton from "@/components/UI/buttons/FileButton";

const HeroAgreementsPage = () => {
  const t = useTranslations("Collective_labour_agreement");
  const agreements = Array.from({ length: 10 }, (v, i) => i);
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
            {t(`title.0`)}
            <span className="text-red">{t(`title.1`)}</span>
          </Title>

          <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            {agreements.slice(0, 7).map((el, index) => (
              <li key={el} className="text-[15px] flex md:flex-col gap-4 md:pr-2">
                <Image
                  src={Done}
                  width={32}
                  height={32}
                  alt="червоний прапорець у червоному колі"
                />
                {/* {el} */}
                {t(`first_items.${index}`)}
              </li>
            ))}
          </ul>
          <ul className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {agreements.slice(7, 10).map((el, index) => (
              <li key={el} className="text-[15px] flex md:flex-col gap-4 md:pr-2">
                <Image
                  src={Done}
                  width={32}
                  height={32}
                  alt="червоний прапорець у червоному колі"
                />
                {/* {el} */}
                {t(`second_items.${index}`)}
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
          <FileButton
            name={t(`hero_button`)}
            link={`koldogovor.pdf`}
            styles={"mx-auto mt-8 md:ml-0"}
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAgreementsPage;
