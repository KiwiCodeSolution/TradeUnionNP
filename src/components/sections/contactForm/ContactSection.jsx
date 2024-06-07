import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ContactForm from "./ContactForm";
import { inter } from "../../../app/fonts";
import Image from "next/image";
import Men from "@/images/feedback.svg";
import agr_1 from "@/images/home/agr_1.svg";
import agr_2 from "@/images/home/agr_2.svg";
import agr_3 from "@/images/home/agr_3.svg";

const ContactSection = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex items-center justify-between relative"}>
        <div className="w-1/2 flex flex-col">
          <h2 className={`text-[46px] ${inter.className} leading-[55px] font-extrabold`}>
            <span className="text-red">Бажаєте долучитись</span> до Профспілки?
          </h2>
          <p className="text-lg text-grey mt-5 mb-8">
            Заповніть{" "}
            <a href="" className="text-red underline underline-offset-1">
              бланк!
            </a>{" "}
            Або залиште свої дані і ми зв'яжемося з вами!
          </p>
          <ContactForm />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={Men}
            width={600}
            height={549}
            alt="малюнок чоловіка, що сидить а столом з ноутбуком, чашкою гарячого напою та квіткою у вазоні"
          />
          <Image
            src={agr_1}
            width={100}
            height={100}
            alt="білий бланк із загнутим куточком"
            className="absolute top-1/2 -left-4"
          />
          <Image
            src={agr_2}
            width={100}
            height={100}
            alt="біла скріпка"
            className="absolute top-8 right-4"
          />
          <Image
            src={agr_3}
            width={100}
            height={100}
            alt="білий бланк із загнутим куточком"
            className="absolute bottom-0 right-0"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ContactSection;
