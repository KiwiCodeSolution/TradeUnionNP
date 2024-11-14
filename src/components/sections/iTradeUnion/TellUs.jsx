import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

import TellUsContacts from "./TellUsContacts";

const TellUs = ({ contacts }) => {
  const t = useTranslations("I");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"pt-32 pb-20 z-[10] relative"}>
        <Title tag={"h2"} styles={"text-center"}>
          {t(`tell_title.0`)} {t(`tell_title.1`)} <br />
          <span className="text-red ">{t(`tell_title.2`)}</span>
          {/* <span className="hidden md:block text-red">
            {t(`tell_title.1`)} <br /> {t(`tell_title.2`)}
          </span> */}
        </Title>
        <p className="text-lg mt-5 text-grey text-center">{t(`tell_text`)}</p>
        <TellUsContacts currentContacts={contacts} />
      </Wrapper>
      <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />
    </BaseSection>
  );
};

export default TellUs;
