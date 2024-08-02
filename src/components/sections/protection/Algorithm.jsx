import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import AlgorithmSwiper from "./AlgorithmSwiper";

const Algorithm = () => {
  const t = useTranslations("Protection");

  const steps = [
    {
      title: t(`algorithm_steps.0.title`),
      text: t(`algorithm_steps.0.text`),
    },
    {
      title: t(`algorithm_steps.1.title`),
      text: t(`algorithm_steps.1.text`),
    },
    {
      title: t(`algorithm_steps.2.title`),
      text: t(`algorithm_steps.2.text`),
    },
    {
      title: t(`algorithm_steps.3.title`),
      text: t(`algorithm_steps.3.text`),
    },
    {
      title: t(`algorithm_steps.4.title`),
      text: t(`algorithm_steps.4.text`),
    },
    {
      title: t(`algorithm_steps.5.title`),
      text: t(`algorithm_steps.5.text`),
    },
  ];

  return (
    <BaseSection style={"pt-10 bg-white"}>
      <div className="border-dashed border-4 border-bgBlack w-screen border-opacity-20 absolute top-[290px] left-0" />
      <Title tag={"h2"} styles={"text-center"}>
        {t(`algorithm_title.0`)}{" "}
        <span className="text-red">
          {t(`algorithm_title.1`)} <br />
          {t(`algorithm_title.2`)}
        </span>
        {t(`algorithm_title.3`)}
      </Title>
      <AlgorithmSwiper steps={steps} step={t(`step`)} />
    </BaseSection>
  );
};

export default Algorithm;
