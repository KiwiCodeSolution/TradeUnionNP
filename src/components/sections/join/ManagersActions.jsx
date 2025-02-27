import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/join/arrow_1.png";
import ButtonsSection from "./ButtonsSection";

const ManagersActions = () => {
  const t = useTranslations("Join");
  return (
    <BaseSection style={"bg-bgGrey pb-10"}>
      <Wrapper>
        <div className="w-full xl:w-4/5 mx-auto relative md:px-6 ">
          <p className="text-center text-2xl md:text-[30px] xl:text-[32px] leading-7 xl:leading-[1.2] font-semibold mb-8 md:mt-4">
            {t("managers_text.0")}
            <span className="text-red"> {t("managers_text.1")}</span> {t("managers_text.2")}
            <br />
            {t("managers_text.3")}
            <br />
            {t("managers_text.4")}
          </p>
          <div className="mb-[94px] xl:mb-24 relative">
            <p className="text-center text-4xl md:text-[40px] xl:text-[64px] font-bold leading-[1.2] relative z-[2]">
              {t("managers_text.5")}
            </p>

            <Image
              src={Arrow}
              width={124}
              height={120}
              alt=""
              className="w-8 h-8 md:w-[80px] md:h-[90px] xl:w-[124px] xl:h-[120px] absolute bottom-[70px] left-[20px] md:bottom-[-7px] md:left-[61px] z-[0]"
            />
            <Image
              src={Arrow}
              width={124}
              height={120}
              alt=""
              className="w-12 h-12 md:w-[120px] md:h-[140px] xl:w-[124px] xl:h-[120px] absolute bottom-[29px] right-[9px] md:bottom-[-11px] z-[0]"
            />
          </div>
          <ButtonsSection />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ManagersActions;
