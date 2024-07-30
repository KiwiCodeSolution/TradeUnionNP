import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Calendar from "@/images/aid/dopomoga-2.svg";
import Alarm from "@/images/aid/icon-alarm.svg";
import Title from "@/components/Title";

const Limitation = () => {
  const t = useTranslations("Financial_Aid");
  return (
    <BaseSection style={"bg-bgGrey"}>
      <div className="absolute h-52 left-0 right-0 bg-gradient-to-t from-bgGrey to-white z-0 top-0" />
      <Wrapper styles={"flex flex-col md:flex-row pt-16"}>
        <div className="w-full md:w-1/2 flex flex-col gap-y-8 pt-16 relative order-2 md:order-1">
          <Title tag={"h2"} styles={"text-center md:text-left"}>
            {t(`limitation_title.0`)}
            <span className="text-red"> {t(`limitation_title.1`)}</span> {t(`limitation_title.2`)}
          </Title>
          <ul className="flex flex-col gap-y-8">
            <li className="flex flex-col gap-y-4 md:gap-y-16">
              <div className="flex items-center gap-x-4">
                <Image src={Alarm} width={32} height={39} alt="червоний годинник" />
                <p className="text-[30px] font-bold"> {t(`first_limit`)}</p>
              </div>
              <p className="text-lg text-grey">
                {t(`first_limit_text.0`)}
                <strong> {t(`first_limit_text.1`)}</strong> {t(`first_limit_text.2`)}
              </p>
            </li>
            <li className="flex flex-col gap-y-4 md:gap-y-16">
              <div className="flex items-center gap-x-4">
                <Image src={Alarm} width={32} height={39} alt="червоний годинник" />
                <p className="text-[30px] font-bold"> {t(`second_limit`)}</p>
              </div>
              <p className="text-lg text-grey">{t(`second_limit_text`)}</p>
            </li>
          </ul>
        </div>
        <Image
          src={Calendar}
          width={592}
          height={518}
          className="w-full md:w-1/2 relative order-1 md:order-2"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Limitation;
