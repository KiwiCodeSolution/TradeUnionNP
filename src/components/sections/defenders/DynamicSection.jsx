import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

const DynamicSection = () => {
  const t = useTranslations("Defenders");
  return (
    <BaseSection style={"mt-10"}>
      <div className={"w-full xl:w-[1280px] flex flex-col gap-4 xl:gap-4 mx-auto"}>
        <h2
          className={`text-[32px] md:text-[40px] xl:text-[50px] font-extrabold text-center ${inter.className}`}
        >
          <span className="text-red">{t("dynamic_title.0")}</span>
          {t("dynamic_title.1")}
        </h2>
        <Image
          src="/images/defenders/graf_mob.png"
          width={436}
          height={343}
          alt="декоративне зображення для картки"
          className="mx-auto object-cover md:hidden"
        />
        <Image
          src="/images/defenders/graf_md.png"
          width={656}
          height={652}
          alt="декоративне зображення для картки"
          className="mx-auto object-cover md:block hidden xl:hidden"
        />
        <Image
          src="/images/defenders/graf.png"
          width={1180}
          height={801}
          alt="декоративне зображення для картки"
          className="mx-auto object-cover xl:block hidden"
        />
      </div>
    </BaseSection>
  );
};
export default DynamicSection;
