import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Bookmark from "@/images/agreement/bookmark-logo.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
const RegularEvent = () => {
  const t = useTranslations("Defenders");
  return (
    <BaseSection style={"mt-10 md:mt-[60px] xl:mt-3"}>
      <div
        className={
          "w-full xl:w-[1280px] flex flex-col gap-4 xl:gap-4 mx-auto pt-12 px-4 md:px-14 xl:px-[50px] pb-4 md:pb-8 xl:pb-14"
        }
      >
        <div className="w-full h-fit flex flex-col reg-event-shadow bg-[#C9C9C903]/[0.01] rounded-[32px] pt-8 relative">
          <Image
            src={Bookmark}
            width={126}
            height={126}
            className="w-[80px] xl:w-[126px] absolute top-0 right-[14px] xl:right-[60px] transform -translate-y-[35px] xl:-translate-y-[50px]"
            alt="закладка червоного кольору із білим логотипом профспілки"
          />
          <h2
            className={`text-[32px] md:text-[40px] xl:text-[50px] font-extrabold text-center ${inter.className} mb-4 xl:mb-8`}
          >
            {t("regular_title.0")}
            <span className="text-red">{t("regular_title.1")}</span>
          </h2>
          <div className="flex flex-col xl:flex-row gap-8 xl:px-[71px] overflow-hidden">
            <Image
              src="/images/defenders/reg_mob.png"
              width={375}
              height={480}
              alt="фонове зображення, градієнт у довільній формі"
              className="md:hidden w-[375px] h-[480px] absolute top-[80px] left-[0px] z-[0] object-cover"
            />
            <Image
              src="/images/defenders/reg_top.png"
              width={482}
              height={240}
              alt="фонове зображення, градієнт у довільній формі"
              className="hidden md:block w-[482px] h-[240px] absolute top-[120px] xl:top-[68px] left-[45px] xl:left-[16px]"
            />
            <Image
              src="/images/defenders/reg_bottom.png"
              width={301}
              height={161}
              alt="фонове зображення, градієнт у довільній формі"
              className="hidden md:block w-[301px] h-[161px] absolute md:bottom-[550px] md:left-[350px] rotate-[-45deg] xl:bottom-[50px] xl:left-[75px] xl:rotate-[-15deg]"
            />
            <div className="w-full h-full xl:w-[352px] xl:h-[460px] shrink-0 ">
              <Image
                src="/images/defenders/regular.png"
                width={352}
                height={400}
                alt="зображення товарів, на які є регулярні збори"
                className="block w-full h-full xl:w-[352px] xl:h-[460px] mx-auto relative z-[1]"
              />
            </div>
            <div className="flex flex-col items-center justify-between px-4 xl:px-[43px] pb-9">
              <div className="flex flex-col gap-2">
                <p className={`${inter.className} text-2xl font-bold`}>
                  {t.rich("regular_texts.0", {
                    b1: chunks => <span className="text-red">{chunks}</span>,
                  })}
                </p>
                <p className={`${inter.className} text-lg`}>
                  {t.rich("regular_texts.1", {
                    b1: chunks => <span className="text-red font-bold">{chunks}</span>,
                  })}
                </p>
                <p className={`${inter.className} text-lg`}>{t("regular_texts.2")}</p>
                <p className={`${inter.className} text-lg mb-5`}>{t("regular_texts.3")}</p>
                <a
                  href="https://novaposhta.ua/svoi/"
                  className="text-[#1C7EED] hover:underline hover:underline-offset-1 text-lg font-bold"
                >
                  https://novaposhta.ua/svoi/
                </a>
              </div>
              <LinkButton
                goTo="https://novaposhta.ua/svoi/"
                goToPage={true}
                view="red"
                locale="uk"
                icon
                isRedArrow={true}
                style={"mt-4"}
              >
                {t("regular_btn")}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};
export default RegularEvent;
