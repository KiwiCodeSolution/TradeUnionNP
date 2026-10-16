import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Arrow from "@/images/arrow_red.svg";
import { BaseURL } from "@/constants/BaseUrl";
import BlanksHealth from "./BlanksHealth";

const ConditionsHealth = () => {
  const t = useTranslations();

  const documentsList = [
    {
      title: t(`Financial_Aid.docs.8.title`),
      text: t(`Financial_Aid.docs.8.health_text`),
      points: [
        t(`Financial_Aid.docs.8.points.0`),
        t(`Financial_Aid.docs.8.points.1`),
        t(`Financial_Aid.docs.8.points.2`),
      ],
      file: "ubd.pdf",
    },
    {
      title: t(`Financial_Aid.docs.10.title`),
      text: t(`Financial_Aid.docs.10.health_text`),
      points: [
        t(`Financial_Aid.docs.10.points.0`),
        t(`Financial_Aid.docs.10.points.1`),
        t(`Financial_Aid.docs.10.points.2`),
      ],
      file: "poranenna.pdf",
    },
    {
      title: t(`Financial_Aid.docs.7.title`),
      text: t(`Financial_Aid.docs.7.health_text`),
      points: [
        t(`Financial_Aid.docs.7.points.0`),
        t(`Financial_Aid.docs.7.points.1`),
        t(`Financial_Aid.docs.7.points.2`),
        t(`Financial_Aid.docs.7.points.3`),
        t(`Financial_Aid.docs.7.points.4`),
        t(`Financial_Aid.docs.7.points.5`),
      ],
      file: "ozdorovlenna-dytyny.pdf",
    },
    {
      title: t(`Health.treatment.text.0`),
      text: t(`Financial_Aid.docs.0.text`),
      points: [
        t(`Financial_Aid.docs.0.points.0`),
        t(`Financial_Aid.docs.0.points.1`),
        t(`Financial_Aid.docs.0.points.2`),
        t(`Financial_Aid.docs.0.points.3`),
      ],
      file: "likuvannya-chlena-profspilki.pdf",
    },
    {
      title: t(`Health.treatmentRelative.text.0`),
      text: t(`Financial_Aid.docs.1.text`),
      points: [
        t(`Financial_Aid.docs.1.points.0`),
        t(`Financial_Aid.docs.1.points.1`),
        t(`Financial_Aid.docs.1.points.2`),
        t(`Financial_Aid.docs.1.points.3`),
        t(`Financial_Aid.docs.1.points.4`),
      ],
      file: "likuvannya-rodicha.pdf",
    },
  ];

  return (
    <section className="w-full py-14 relative z-[1]">
      <Wrapper styles={""}>
        <Title tag={"h2"} styles={"mb-8 text-center"}>
          <span className="text-red">{t(`Financial_Aid.conditions_title_healthy.0`)}</span>
          {t(`Financial_Aid.conditions_title_healthy.1`)}
        </Title>
        <BlanksHealth documents={documentsList} name={t(`Financial_Aid.link`)} />
        <div className="mx-auto mt-12">
          <a
            href={`${BaseURL}files/pologennya-ozdorovlennya.pdf`}
            target="_blank"
            className="w-fit flex flex-row items-center gap-3 text-red text-sm uppercase font-bold mx-auto"
          >
            {t(`Financial_Aid.doc_button_healthy`)}
            <Image
              src={Arrow}
              width={30}
              height={30}
              alt="біла стрілочка вправо на червоному фоні"
              className="arrow-icon"
            />
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default ConditionsHealth;
