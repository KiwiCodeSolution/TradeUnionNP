import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ContactForm from "./ContactForm";

import Title from "@/components/Title";
import ContactFormImages from "./ContactFormImages";

const ContactSection = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex items-center justify-between relative"}>
        <div className="w-1/2 flex flex-col">
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
          <ContactForm />
        </div>
        <ContactFormImages />
      </Wrapper>
    </BaseSection>
  );
};

export default ContactSection;
