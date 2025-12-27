import { useTranslations } from "next-intl";
import Image from "next/image";
import Join from "../hero/Join";

const HeroDef = () => {
  const t = useTranslations("");
  const modalTitle = [
    t(`HomePage.join.modalTitle.0`),
    t(`HomePage.join.modalTitle.1`),
    t(`HomePage.join.modalTitle.2`),
  ];
  const confirmModalTitle = [
    t(`HomePage.join.confirmModalTitle.0`),
    t(`HomePage.join.confirmModalTitle.1`),
  ];
  const confirmModalText = [
    t(`HomePage.join.confirmModalText.0`),
    t(`HomePage.join.confirmModalText.1`),
    t(`HomePage.join.confirmModalText.2`),
  ];
  const errors = [
    t(`HomePage.contact_form.error_all_inputs`),
    t(`HomePage.contact_form.error_phone`),
    t(`HomePage.contact_form.error_region`),
  ];

  return (
    <section className="w-full mt-10 md:mt-[60px] xl:mt-5 pt-10 md:pt-5 xl:pt-[50px] overflow-hidden">
      <div className="w-full xl:w-[1280px] md:pl-[60px] xl:px-10 xl:mx-auto flex flex-col items-center">
        {/* <PathPage endPath={t("Defenders.path")} /> */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          {/* image */}
          <div className="w-[328px] h-[300px] ml-20 md:ml-10 md:w-[292px] md:h-[303px] xl:w-[657px] xl:h-[700px] overflow-hidden order-1 md:order-2">
            <Image
              src="/images/defenders/hero.png"
              width={328}
              height={300}
              alt=""
              className="xl:w-full xl:h-full w-[328px] h-[300px]"
            />
          </div>

          {/* text + button Join */}
          <div className="w-full md:w-[404px] xl:w-[587px] flex flex-col gap-y-10 md:gap-y-4 order-2 md:order-1 px-4 md:px-0">
            <h1 className="text-red text-[64px] md:text-[72px] xl:text-[96px] text-center md:text-left font-bold leading-[1]">
              {t("Defenders.title")}
            </h1>
            <div className="flex flex-col gap-y-1 px-4 md:px-0">
              <p className="text-xl">{t("Defenders.subtitle")}</p>
              <Join
                title={t(`Defenders.btn`)}
                modalTitle={modalTitle}
                confirmModalTitle={confirmModalTitle}
                confirmModalText={confirmModalText}
                errors={errors}
                placeholder={t(`HomePage.contact_form.placeholder_region`)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroDef;
