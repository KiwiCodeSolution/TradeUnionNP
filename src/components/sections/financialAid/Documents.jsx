import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import DocumentsList from "./DocumentsList";
import Image from "next/image";
import Arrow from "@/images/arrow_red.svg";
import { BaseURL } from "@/constants/BaseUrl";

const Documents = ({ locale }) => {
  const t = useTranslations("Financial_Aid");

  const documentsList = [
    {
      title: t(`docs.0.title`),
      text: t(`docs.0.text`),
      points: [
        t(`docs.0.points.0`),
        t(`docs.0.points.1`),
        t(`docs.0.points.2`),
        t(`docs.0.points.3`),
      ],
      file: "likuvannya-chlena-profspilki.pdf",
    },
    {
      title: t(`docs.1.title`),
      text: t(`docs.1.text`),
      points: [
        t(`docs.1.points.0`),
        t(`docs.1.points.1`),
        t(`docs.1.points.2`),
        t(`docs.1.points.3`),
        t(`docs.1.points.4`),
      ],
      file: "likuvannya-rodicha.pdf",
    },
    {
      title: t(`docs.2.title`),
      text: t(`docs.2.text`),
      points: [
        t(`docs.2.points.0`),
        t(`docs.2.points.1`),
        t(`docs.2.points.2`),
        t(`docs.2.points.3`),
        t(`docs.2.points.4`),
      ],
      file: "zagibel-pracivnika.pdf",
    },
    {
      title: t(`docs.3.title`),
      text: t(`docs.3.text`),
      points: [
        t(`docs.3.points.0`),
        t(`docs.3.points.1`),
        t(`docs.3.points.2`),
        t(`docs.3.points.3`),
      ],
      file: "pokhovannya-rodicha.pdf",
    },
    {
      title: t(`docs.4.title`),
      text: t(`docs.4.text`),
      points: [t(`docs.4.points.0`), t(`docs.4.points.1`), t(`docs.4.points.2`)],
      file: "odruzhennya.pdf",
    },
    {
      title: t(`docs.5.title`),
      text: t(`docs.5.text`),
      points: [
        t(`docs.5.points.0`),
        t(`docs.5.points.1`),
        t(`docs.5.points.2`),
        t(`docs.5.points.3`),
      ],
      file: "narodzhennya.pdf",
    },
    {
      title: t(`docs.6.title`),
      text: t(`docs.6.text`),
      points: [t(`docs.6.points.0`), t(`docs.6.points.1`), t(`docs.6.points.2`)],
      file: "yuviley.pdf",
    },
    {
      title: t(`docs.7.title`),
      text: t(`docs.7.text`),
      points: [
        t(`docs.7.points.0`),
        t(`docs.7.points.1`),
        t(`docs.7.points.2`),
        t(`docs.7.points.3`),
        t(`docs.7.points.4`),
        t(`docs.7.points.5`),
        t(`docs.7.points.6`),
      ],
      file: "ozdorovlenna-dytyny.pdf",
    },
    {
      title: t(`docs.8.title`),
      text: t(`docs.8.text`),
      points: [
        t(`docs.8.points.0`),
        t(`docs.8.points.1`),
        t(`docs.8.points.2`),
        t(`docs.8.points.3`),
      ],
      file: "ubd.pdf",
    },
    {
      title: t(`docs.9.title`),
      text: t(`docs.9.text`),
      points: [t(`docs.9.points.0`), t(`docs.9.points.1`), t(`docs.9.points.2`)],
      file: "putivka.pdf",
    },
    {
      title: t(`docs.10.title`),
      text: t(`docs.10.text`),
      points: [t(`docs.10.points.0`), t(`docs.10.points.1`), t(`docs.10.points.2`)],
      file: "poranenna.pdf",
    },
    {
      title: t(`docs.11.title`),
      text: t(`docs.11.text`),
      points: [t(`docs.11.points.0`), t(`docs.11.points.1`), t(`docs.11.points.2`)],
      file: "occupation.pdf",
    },
    {
      title: t(`docs.12.title`),
      text: t(`docs.12.text`),
      points: [t(`docs.12.points.0`), t(`docs.12.points.0`), t(`docs.12.points.0`)],
      file: "vpo.pdf",
    },
    {
      title: t(`docs.13.title`),
      text: t(`docs.13.text`),
      points: [t(`docs.13.points.0`), t(`docs.13.points.1`), t(`docs.13.points.2`)],
      file: "other.pdf",
    },
  ];
  return (
    <BaseSection id={"documents"} style={"bg-bgGrey pt-16"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center"}>
          <span className="text-red">{t(`documents_title.0`)} </span> {t(`documents_title.1`)}{" "}
          <br /> {t(`documents_title.2`)}
        </Title>
        <DocumentsList
          locale={locale}
          documents={documentsList}
          button={t(`docs_modal_button`)}
          link={t(`docs_modal_link`)}
        />
        <div className="mx-auto mt-12">
          <a
            href={`${BaseURL}files/pologennya.pdf`}
            target="_blank"
            className="w-fit flex flex-row items-center gap-3 text-red text-sm uppercase font-bold mx-auto"
          >
            {t(`doc_button`)}
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
    </BaseSection>
  );
};

export default Documents;
