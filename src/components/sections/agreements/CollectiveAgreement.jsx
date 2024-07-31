import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import BaseSection from "@/components/BaseSection";
import LinkButton from "@/components/UI/buttons/LinkButton";
import ImagesAgreement from "./ImagesAgreement";
import agr_1 from "@/images/home/agr_1.svg";
import agr_2 from "@/images/home/agr_2.svg";
import agr_3 from "@/images/home/agr_3.svg";
import ParallaxSection from "@/components/UI/parallax/ParallaxSection";
import Title from "@/components/Title";

const ITEMS = [
  {
    id: "1",
    url: agr_1,
    style: "absolute top-1/4 left-2",
    alt: "білий бланк із загнутим куточком",
  },
  { id: "2", url: agr_2, style: "absolute top-1/4 right-2", alt: "біла скріпка" },
  {
    id: "3",
    url: agr_3,
    style: "absolute bottom-0 right-0",
    alt: "білий бланк із загнутим куточком",
  },
];

const CollectiveAgreement = () => {
  const t = useTranslations("HomePage.collectiveAgreement");
  return (
    <BaseSection style="bg-bgGrey h-fit md:min-h-[515px]">
      <div className="w-full absolute top-0 h-64 left-0 z-[10] bg-gradient-to-t from-bgGrey to-white" />
      <ParallaxSection items={ITEMS} />
      <Wrapper styles={"pt-12 md:pt-32"}>
        <article className="w-full relative px-7 md:p-0 mx-auto flex flex-col md:flex-row justify-center z-10 rounded-xl shadow-md bg-white">
          <div className="w-full md:w-1/2 flex flex-col gap-y-4 py-7 md:py-14 md:ml-16">
            <Title tag="h2">
              {t(`title.0`)} <span className="text-red">{t(`title.1`)}</span>
            </Title>
            <p className="text-base md:text-lg text-grey">{t(`text`)}</p>
            <a
              className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between mt-5"
              href={"/files/koldogovor.pdf"}
            >
              {t(`button`)}
            </a>
          </div>
          <ImagesAgreement />
        </article>
      </Wrapper>
    </BaseSection>
  );
};

export default CollectiveAgreement;
