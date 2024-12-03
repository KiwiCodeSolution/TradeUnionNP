import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import BlanksHealth from "./BlanksHealth";

const ConditionsHealth = () => {
  const t = useTranslations("Financial_Aid");

  const documentsList = [
    {
      title: t(`docs.8.title`),
      text: t(`docs.8.health_text`),
      points: [t(`docs.8.points.0`), t(`docs.8.points.1`), t(`docs.8.points.2`)],
      file: "ubd.pdf",
    },
    {
      title: t(`docs.10.title`),
      text: t(`docs.10.health_text`),
      points: [t(`docs.10.points.0`), t(`docs.10.points.1`), t(`docs.10.points.2`)],
      file: "poranenna.pdf",
    },
    {
      title: t(`docs.7.title`),
      text: t(`docs.7.health_text`),
      points: [
        t(`docs.7.points.0`),
        t(`docs.7.points.1`),
        t(`docs.7.points.2`),
        t(`docs.7.points.3`),
        t(`docs.7.points.4`),
        t(`docs.7.points.5`),
      ],
      file: "ozdorovlenna-dytyny.pdf",
    },
  ];

  return (
    <section className="w-full py-14 relative z-[1]">
      <Wrapper styles={""}>
        <Title tag={"h2"} styles={"mb-8 text-center"}>
          <span className="text-red">Умови надання</span> матеріальної допомоги на оздоровлення
        </Title>
        <BlanksHealth documents={documentsList} name={t(`link`)} />
      </Wrapper>
    </section>
  );
};

export default ConditionsHealth;
