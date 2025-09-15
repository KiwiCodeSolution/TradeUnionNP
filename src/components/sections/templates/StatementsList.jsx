import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Blank from "./Blank";
import Title from "@/components/Title";

const StatementsList = () => {
  const t = useTranslations("Forms");
  const files = [
    {
      title: t(`statements.0.title`),
      text: t(`statements.0.text`),
      link: "doc/narodzhennya.pdf",
    },
    {
      title: t(`statements.1.title`),
      text: t(`statements.1.text`),
      link: "doc/odruzhennya.pdf",
    },
    {
      title: t(`statements.2.title`),
      text: t(`statements.2.text`),
      link: "doc/ozdorovlenna-dytyny.pdf",
    },
    {
      title: t(`statements.3.title`),
      text: t(`statements.3.text`),
      link: "doc/yuviley.pdf",
    },
    {
      title: t(`statements.4.title`),
      text: t(`statements.4.text`),
      link: "doc/likuvannya-chlena-profspilki.pdf",
    },
    {
      title: t(`statements.5.title`),
      text: t(`statements.5.text`),
      link: "doc/likuvannya-rodicha.pdf",
    },
    {
      title: t(`statements.6.title`),
      text: t(`statements.6.text`),
      link: "doc/putivka.pdf",
    },
    {
      title: t(`statements.7.title`),
      text: t(`statements.7.text`),
      link: "doc/ubd.pdf",
    },
    {
      title: t(`statements.8.title`),
      text: t(`statements.8.text`),
      link: "doc/zagibel-pracivnika.pdf",
    },
    {
      title: t(`statements.9.title`),
      text: t(`statements.9.text`),
      link: "doc/pokhovannya-rodicha.pdf",
    },
    {
      title: t(`statements.10.title`),
      text: t(`statements.10.text`),
      link: "doc/poranenna.pdf",
    },
    {
      title: t(`statements.11.title`),
      text: t(`statements.11.text`),
      link: "doc/occupation.pdf",
    },
    {
      title: t(`statements.12.title`),
      text: t(`statements.12.text`),
      link: "doc/vpo.pdf",
    },
    {
      title: t(`statements.13.title`),
      text: t(`statements.13.text`),
      link: "doc/other.pdf",
    },
  ];
  return (
    <BaseSection style={"bg-bgGrey pt-8 md:pt-16"}>
      <Wrapper styles={"flex flex-col"}>
        <Title tag="h2" styles="text-center mb-8">
          <span className="text-red">{t(`statement_title.0`)}</span> {t(`statement_title.1`)} <br />{" "}
          {t(`statement_title.2`)}
        </Title>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {files.map((el, index) => (
            <Blank key={el.link} link={el.link} title={el.title} text={el.text} />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StatementsList;
