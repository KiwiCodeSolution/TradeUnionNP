import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ContactForm from "./ContactForm";

import Title from "@/components/Title";
import ContactFormImages from "./ContactFormImages";

const ContactSection = ({ bgStyle }) => {
  return (
    <BaseSection style={bgStyle}>
      <Wrapper styles={"flex flex-col md:flex-row items-center justify-between relative"}>
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
          <Title tag="h2">
            <span className="text-red">Бажаєте долучитись</span> до Профспілки?
          </Title>

          <p className="text-lg text-grey mt-5 mb-8">
            Заповніть{" "}
            <a href="" className="text-red underline underline-offset-1">
              бланк!
            </a>{" "}
            Або залиште свої дані і ми зв'яжемося з вами!
          </p>
          <ContactForm inputStyle={bgStyle} />
        </div>
        <ContactFormImages imageStyle={bgStyle} />
      </Wrapper>
    </BaseSection>
  );
};

export default ContactSection;
