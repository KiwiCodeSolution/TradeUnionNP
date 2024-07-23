import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ContactForm from "./ContactForm";

import Title from "@/components/Title";
import ContactFormImages from "./ContactFormImages";

const ContactSection = ({ bgStyle }) => {
  const t = useTranslations("HomePage.contact_section");
  return (
    <BaseSection style={bgStyle}>
      <Wrapper styles={"flex flex-col md:flex-row items-center justify-between relative pb-4"}>
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
          <Title tag="h2" styles={"mt-5 md:mt-0"}>
            <span className="text-red"> {t(`title.0`)}</span> {t(`title.1`)}
          </Title>

          <p className="text-lg text-grey mt-5 mb-8">
            {t(`subtitle.0`)}
            <a href="" className="text-red underline underline-offset-1">
              {t(`subtitle.1`)}
            </a>{" "}
            {t(`subtitle.2`)}
          </p>
          <ContactForm inputStyle={bgStyle} />
        </div>
        <ContactFormImages imageStyle={bgStyle} />
      </Wrapper>
    </BaseSection>
  );
};

export default ContactSection;
