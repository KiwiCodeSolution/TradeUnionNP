import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import FileButton from "@/components/UI/buttons/FileButton";

const StepOne = () => {
  const t = useTranslations();
  const files = [
    {
      title: t(`Forms.templates.0`),
      fileName: "zajava_na_vstup",
      link: "zajava_na_vstup.pdf",
    },
    {
      title: t(`Forms.templates.5`),
      fileName: "zajava_na_vstup",
      link: "zajava_na_vstup_nova_pay.pdf",
    },
    {
      title: t(`Forms.templates.1`),
      fileName: "zajava_na_vstup_np_global",
      link: "zajava_na_vstup_np_global.pdf",
    },
    {
      title: t(`Forms.templates.2`),
      fileName: "zajava_na_vstup_novoboks",
      link: "zajava_na_vstup_novoboks.pdf",
    },
    {
      title: t(`Forms.templates.3`),
      fileName: "zajava_na_vstup_np_centr",
      link: "zajava_na_vstup_np_centr.pdf",
    },
    {
      title: t(`Forms.templates.4`),
      fileName: "zajava_na_vstup_np-didzhital",
      link: "zajava_na_vstup_np-didzhital.pdf",
    },
  ];

  return (
    <BaseSection style={"bg-bgGrey pt-10"}>
      <Wrapper>
        <Title tag={"h1"} styles={"text-center"}>
          <span className="text-red">{t(`Join.step_1_title.0`)}</span>
          {t(`Join.step_1_title.1`)}
        </Title>
        <ul className="grid grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-8 mt-14">
          {files.map((el, idx) => (
            <li
              key={el.link}
              className={`w-full bg-white rounded-[20px] pt-[37px] px-[38px] pb-[31px] md:px-[77px] xl:px-[38px] shadow-standardShadow col-span-2 `}
            >
              <p className="text-[32px] text-grey font-extrabold leading-[1.5] mb-3">{el.title}</p>
              <FileButton name={t(`Forms.button`)} link={el.link} styles={"ml-auto"} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default StepOne;
