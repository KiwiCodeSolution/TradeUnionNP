import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import SectionImage from "@/images/recreations/np-arrow.svg";

const PrincipleRecreation = () => {
  const t = useTranslations("Sport");
  return (
    <BaseSection style={"bg-white"}>
      <Wrapper styles={"relative pb-10"}>
        <Image
          src={SectionImage}
          width={281}
          height={382}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[1]"
          alt="сіре зображення логотипу Профспілки"
        />
        <p className="text-center text-2xl md:text-[40px] leading-[1.4] mt-16 md:mt-32 relative z-[2] md:mx-32">
          <strong>{t(`principle_recreation.0`)}</strong> {t(`principle_recreation.1`)}
        </p>
      </Wrapper>
    </BaseSection>
  );
};

export default PrincipleRecreation;
