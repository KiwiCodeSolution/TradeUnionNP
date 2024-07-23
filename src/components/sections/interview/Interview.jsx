import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Avatar from "@/images/home/avatar.svg";
import Quote from "@/images/lapky.svg";
import { inter } from "@/app/[locale]/fonts";
import LinkButton from "@/components/UI/buttons/LinkButton";

const Interview = ({ locale }) => {
  const t = useTranslations("HomePage.interview");

  return (
    <BaseSection style={"z-0 py-20"}>
      {locale === "en" && (
        <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />
      )}

      <Wrapper styles={"relative z-[10]"}>
        <div className="flex flex-col mt-14 md:mt-24 md:mx-28">
          <p className={`${inter.className} text-2xl md:text-[40px] leading-[1.4] font-light`}>
            {t(`text.0`)}
            <br /> {t(`text.1`)}
          </p>

          <article className="mt-9 flex w-full flex-col xl:w-1/2 ">
            <div className="w-full flex gap-x-3 items-center justify-between">
              <div className="w-[100px] h-fit rounded-full overflow-hidden">
                <Image
                  src={Avatar}
                  width={100}
                  height={100}
                  alt="фотокартка людини, що давала інтерв'ю"
                />
              </div>
              <div className="w-fit flex flex-col gap-y-2">
                <h3 className="text-[22px] font-bold"> {t(`name`)}</h3>
                <p className="text-[15px]">{t(`position`)}</p>
              </div>
            </div>
            <LinkButton
              view="transparent"
              style="uppercase mt-6 w-fit gap-x-2 hover:underline hover:underline-offset-4 text-sm font-bold"
              goTo={"#"}
              goToPage
              icon
            >
              {t(`button`)}
            </LinkButton>
          </article>
        </div>
        <Image
          src={Quote}
          width={77}
          height={71}
          alt="сірі лапки"
          className="absolute top-0 md:bottom-0 md:top-auto right-7 md:right-16 xl:right-0"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Interview;
