import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

import QuantityImg from "@/images/health/quantity_2025.png";

const Quantity = () => {
  const t = useTranslations("Health");
  return (
    <BaseSection style={"py-14 "}>
      <div className="w-full h-[796px] bg-health-gradient absolute -top-[268px] left-0 z-0" />
      <Wrapper styles={"z-[2] relative"}>
        <Title tag={"h2"} styles={"text-center"}>
          {t("quantity_title.0")}
          <span className="text-red">{t("quantity_title.1")}</span>
        </Title>

        <Image
          src={QuantityImg}
          alt="Кількість виданих путівок, вигляд у графіку"
          width={1160}
          height={703}
          className="mt-8 mx-auto"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Quantity;
