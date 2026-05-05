import { useTranslations } from "next-intl";

import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import RedDot from "@/components/UI/RedDot";
import Wrapper from "@/components/Wrapper";

const TemplateHealthSection = () => {
  const t = useTranslations("Health");
  const points = [
    t("template_points.0"),
    t("template_points.1"),
    t("template_points.2"),
    t("template_points.3"),
    t("template_points.4"),
  ];
  return (
    <BaseSection style={"bg-bgGrey py-8"}>
      <Wrapper styles={"flex gap-x-10 flex-col xl:flex-row"}>
        <div className="w-full xl:w-1/2 flex flex-col gap-y-8 my-auto">
          <Title tag={"h2"}>
            {t("template_title.0")}
            <span className="text-red">{t("template_title.1")}</span>
            {t("template_title.2")}
          </Title>
          <p className="text-grey text-lg mb-8 xl:mb-0">
            {t("template_subtitle.0")}
            <strong>{t("template_subtitle.1")}</strong>
          </p>
          <p className="text-grey text-lg mb-8 xl:mb-0">{t("template_desc")}</p>
        </div>
        <ul className="w-full xl:w-1/2 bg-white rounded-[20px] py-[15px] px-[30px] flex flex-col gap-y-4">
          {points.map(el => (
            <li className="w-full flex items-center gap-x-4" key={el}>
              <RedDot />
              <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{el}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default TemplateHealthSection;
