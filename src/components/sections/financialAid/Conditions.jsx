import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Clock from "@/images/clock.svg";
import Clock_1 from "@/images/clock1.svg";
import Cash from "@/images/aid/dopomoga-1.svg";
import Title from "@/components/Title";

const Conditions = () => {
  const t = useTranslations("Financial_Aid");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row items-center">
          <Image
            src={Cash}
            width={480}
            height={480}
            alt="малюнок руки що тримає гроші"
            className="w-full md:w-2/5"
          />
          <div className="w-full md:w-3/5 flex flex-col gap-y-8">
            <Title tag={"h2"}>
              <span className="text-red">{t(`conditions_title.0`)}</span> {t(`conditions_title.1`)}
            </Title>
            <p className="text-lg">
              {t(`conditions_text.0`)}
              <strong> {t(`conditions_text.1`)}</strong>
            </p>
          </div>
        </div>
        <div className="w-full pt-16 md:pt-0">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">{t(`conditions_term_title.0`)}</span> <br />
            {t(`conditions_term_title.1`)}
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="px-8 md:px-16 py-10 bg-white rounded-2xl w-full flex flex-col gap-4 relative box-clock-shadow">
              <h3 className="text-2xl font-bold text-red">{t(`conditions_term_first_term`)}</h3>
              <p className="text-lg">
                {t(`conditions_term_first_text.0`)}
                <strong>{t(`conditions_term_first_text.1`)}</strong>
                {t(`conditions_term_first_text.2`)}
              </p>
              <Image
                src={Clock}
                width={248}
                height={238}
                alt="годинник"
                className="h-1/3 md:h-2/3 opacity-10 absolute right-2 top-7 md:bottom-5"
              />
            </div>
            <div className="px-8 md:px-16 py-10 bg-white rounded-2xl w-full flex flex-col gap-4 relative box-clock-shadow">
              <h3 className="text-2xl font-bold text-red">{t(`conditions_term_second_term`)}</h3>
              <p className="text-lg">
                <strong>{t(`conditions_term_second_text.0`)}</strong>{" "}
                {t(`conditions_term_second_text.1`)}
              </p>
              <Image
                src={Clock_1}
                width={202}
                height={194}
                alt="пісочний годинник"
                className="h-1/3 md:h-2/3 opacity-10 absolute right-2 top-7 md:bottom-5"
              />
            </div>
          </div>
          <p className="text-lg text-center mt-8">
            {t(`note.0`)} <br />
            {t(`note.1`)} <strong> {t(`note.2`)} </strong>
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Conditions;
