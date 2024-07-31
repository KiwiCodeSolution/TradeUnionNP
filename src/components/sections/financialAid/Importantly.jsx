import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Arrow from "@/images/arrow_red.svg";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Link } from "@/navigation";
import Hand from "@/images/aid/statement.svg";

const Importantly = ({ locale }) => {
  const t = useTranslations("Financial_Aid");
  return (
    <BaseSection style={"bg-bgGrey pt-12 sm:pt-32 pb-12"}>
      <Wrapper>
        <div className="w-full bg-white rounded-2xl px-6 pt-7 md:py-14 md:pl-16 md:pr-0 relative flex">
          <div className="w-full md:w-1/2 flex flex-col gap-y-4">
            <Title tag={"h2"}>{t(`important_title`)}</Title>
            <p className="text-lg text-grey">
              {t(`important_subtitle.0`)} <strong> {t(`important_subtitle.1`)}</strong>
            </p>
            <p className="text-lg text-grey">
              {t(`important_text.0`)}{" "}
              <Link href="/blanky" className="text-red underline hover:underline-offset-2">
                {t(`important_text.1`)}
              </Link>{" "}
              {t(`important_text.2`)}{" "}
              <Link href="/kontakty" className="text-red underline hover:underline-offset-2">
                {t(`important_text.3`)}
              </Link>
            </p>
            <Link
              href={"/blanky"}
              className="w-fit h-[60px] flex items-center justify-between rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 mt-4 text-sm md:text-base"
              locale={locale}
            >
              {t(`link`)}
              <Image
                src={Arrow}
                width={30}
                height={30}
                alt="зображення червоної іконки-стрілочки вправо на білому фоні"
                className="arrow-icon"
                locale={locale}
              />
            </Link>
          </div>
          <Image
            src={Hand}
            width={512}
            height={429}
            alt="зображення договору та рук, що тримають кулькову ручку"
            className="static mt-10 md:mt-0 md:absolute bottom-0 md:right-0 xl:right-12 md:w-1/2 xl:w-[512px]"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Importantly;
