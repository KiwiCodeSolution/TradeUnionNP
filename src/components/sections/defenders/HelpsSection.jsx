import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import HelpsList from "./HelpsList";

const HelpsSection = () => {
  const t = useTranslations("Defenders");
  return (
    <BaseSection style={"mt-10 md:mt-[60px] xl:mt-8"}>
      <div
        className={
          "w-full xl:w-[1280px] flex flex-col gap-4 xl:gap-4 mx-auto py-8 px-4 md:px-14 xl:px-0"
        }
      >
        <h2
          className={`text-[32px] md:text-[40px] xl:text-[50px] font-extrabold xl:text-center ${inter.className}`}
        >
          {t("helps_title.0")}
          <span className="text-red">{t("helps_title.1")}</span>
        </h2>
        <HelpsList />
      </div>
    </BaseSection>
  );
};
export default HelpsSection;
