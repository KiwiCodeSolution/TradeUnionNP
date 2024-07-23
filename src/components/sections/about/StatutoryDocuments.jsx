import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Statute from "@/images/about/statut.svg";
import Arrow from "@/images/arrow_white.svg";

const StatutoryDocuments = () => {
  const t = useTranslations("About.documents");
  return (
    <BaseSection style={"h-fit md:h-[530px] pt-[96px]"}>
      <div className="w-full h-24 absolute top-0 left-0 bg-gradient-to-t from-white to-bgGrey z-[1]" />
      {/* <div className="w-full h-96 absolute bottom-0 left-0 bg-gradient-to-t from-bgGrey to-white z-[1]" /> */}
      <Wrapper styles={"flex flex-col md:flex-row items-start z-[1]"}>
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Image
            src={Statute}
            width={430}
            height={430}
            alt="малюнок сувою чи договору, із написаними строчками та підписом внизу"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-8 order-1 md:order-2">
          <h3 className="text-[30px] font-bold">
            <span className="text-red">{t(`charter.0`)} </span>
            {t(`charter.1`)}
          </h3>
          <a
            href="/files/statut.pdf"
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between mx-auto md:ml-0"
          >
            {t(`button`)}
            <Image src={Arrow} width={30} height={30} alt="іконка червоної стрілочки вправо" />
          </a>
          <h3 className="text-[30px] font-bold">
            <span className="text-red"> {t(`agreement.0`)} </span>
            {t(`agreement.1`)}
          </h3>
          <a
            href="/files/koldogovor.pdf"
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between mx-auto md:ml-0"
          >
            {t(`button`)}
            <Image src={Arrow} width={30} height={30} alt="іконка червоної стрілочки вправо" />
          </a>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StatutoryDocuments;
