import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ContactForm from "./ContactForm";
import { Link } from "@/navigation";

import Title from "@/components/Title";
import ContactFormImages from "./ContactFormImages";

const ContactSection = ({ bgStyle, locale }) => {
  const t = useTranslations("HomePage");
  const errors = [
    t(`contact_form.error_all_inputs`),
    t(`contact_form.error_phone`),
    t(`contact_form.error_region`),
  ];

  return (
    <BaseSection style={bgStyle}>
      <Wrapper styles={"flex flex-col md:flex-row items-center justify-between relative pb-4"}>
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
          <Title tag="h2" styles={"mt-5 md:mt-0"}>
            <span className="text-red"> {t(`contact_section.title.0`)}</span>{" "}
            {t(`contact_section.title.1`)}
          </Title>

          <p className="text-lg text-grey mt-5 mb-8">
            {t(`contact_section.subtitle.0`)}
            <Link href="/blanky" className="text-red underline underline-offset-1" locale={locale}>
              {t(`contact_section.subtitle.1`)}
            </Link>
            {t(`contact_section.subtitle.2`)}
          </p>
          <ContactForm
            inputStyle={bgStyle}
            placeholder={t(`contact_form.placeholder_region`)}
            button={t(`contact_form.button`)}
            errors={errors}
          />
        </div>
        <ContactFormImages imageStyle={bgStyle} />
      </Wrapper>
    </BaseSection>
  );
};

export default ContactSection;
