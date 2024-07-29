import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Agreement from "@/images/agreement.svg";
import Arrow from "@/images/arrow_white.svg";
import Title from "@/components/Title";

const ProtectionAgreement = () => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={"bg-white"}>
      <Wrapper
        styles={"flex flex-col md:flex-row items-center md:items-end xl:items-center gap-y-4"}
      >
        <Image
          src={Agreement}
          width={600}
          height={502}
          alt="зображення договору та рук, що тримають кулькову ручку"
          className="w-full md:w-1/2 order-2 md:order-1 md:mb-0"
        />
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 order-1 xl:order-2">
          <Title tag="h2">
            {t(`agreement_title.0`)} <span className="text-red">{t(`agreement_title.1`)}</span>
          </Title>

          <p className="text-[15px]">{t(`agreement_text`)}</p>
          <a
            href="/files/statut.pdf"
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between mt-4 md:mt-0 md:mb-8 xl:mb-0"
          >
            {t(`agreement_button`)}
            <Image src={Arrow} width={30} height={30} alt="іконка червоної стрілочки вправо" />
          </a>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionAgreement;
