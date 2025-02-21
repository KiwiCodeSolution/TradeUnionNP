import { inter } from "@/app/[locale]/(client)/fonts";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";

const ParticipationRules = () => {
  const t = useTranslations("Health");
  const rules = [
    t("participation_rules.0"),
    t("participation_rules.1"),
    t("participation_rules.2"),
    t("participation_rules.3"),
  ];

  return (
    <>
      <div className="w-full bg-white rounded-[20px] py-6 px-2 md:py-10 md:pl-[64px] md:pr-9 xl:px-20 my-14">
        <Title tag={"h2"}>
          {t("participation_titles.0")}
          <br /> <span className="text-red"> {t("participation_titles.1")}</span>
          {t("participation_titles.2")}
        </Title>
        <ul className="list-disc list-inside flex flex-col gap-y-[18px] mt-8">
          {rules.map(rule => (
            <li
              key={rule}
              className={`${inter.className} text-lg leading-[1.2] flex items-center gap-x-6`}
            >
              <div className="w-6 h-6 rounded-full bg-red bg-opacity-20 flex items-center justify-center">
                <div className="w-[11px] h-[11px] rounded-full bg-red" />
              </div>
              <span className="w-[calc(100%-48px)]">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-white rounded-[20px] p-3 md:py-10 md:px-[64px] flex flex-col gap-y-6">
        <p className={`${inter.className} text-[16px] md:text-lg leading-[1.2]`}>
          {t("participation_details.0")}
        </p>
        <p className={`${inter.className} text-[16px] md:text-lg leading-[1.2]`}>
          {t("participation_details.1")}
        </p>
      </div>
    </>
  );
};

export default ParticipationRules;
