import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Blank from "./Blank";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";

const TemplatesList = () => {
  const t = useTranslations("Forms");
  const files = [
    {
      title: t(`templates.0`),
      fileName: "zajava_na_vstup",
      link: "files/zajava_na_vstup.pdf",
    },
    {
      title: t(`templates.1`),
      fileName: "zajava_na_vstup_np_global",
      link: "files/zajava_na_vstup_np_global.pdf",
    },
    {
      title: t(`templates.2`),
      fileName: "zajava_na_vstup_novoboks",
      link: "files/zajava_na_vstup_novoboks.pdf",
    },
    {
      title: t(`templates.3`),
      fileName: "zajava_na_vstup_np_centr",
      link: "files/zajava_na_vstup_np_centr.pdf",
    },
    {
      title: t(`templates.4`),
      fileName: "zajava_na_vstup_np-didzhital",
      link: "files/zajava_na_vstup_np-didzhital.pdf",
    },
  ];
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={t(`path`)} />

        <Title tag="h2" styles="hidden md:inline-block text-center mb-8">
          <span className="text-red">{t(`title_templates.0`)}</span> {t(`title_templates.1`)}
          <br /> {t(`title_templates.2`)}
        </Title>
        <Title tag="h2" styles="md:hidden inline-block text-center mb-8">
          <span className="text-red">{t(`title_templates.0`)}</span> {t(`title_templates.1`)}
          {t(`title_templates.2`)}
        </Title>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {files.map((el, index) => (
            <Blank key={el.fileName} link={el.link} title={el.title} />
          ))}
        </div>
        <p className="text-lg text-grey mt-8 text-center">
          <span className="text-red">{t(`text_templates.0`)}</span> {t(`text_templates.1`)}
          <span className="text-red">{t(`text_templates.2`)}</span> {t(`text_templates.3`)}
        </p>
      </Wrapper>
    </BaseSection>
  );
};

export default TemplatesList;
