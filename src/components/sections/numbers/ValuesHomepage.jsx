import Image from "next/image";
import Wrapper from "../../Wrapper";
import BgImages from "@/images/home/bg_number.svg";
import BgImagesMobile from "@/images/home/icon_pronas_short.svg";
import NumbersList from "./NumbersList";
import BaseSection from "@/components/BaseSection";

const Values = () => {
  return (
    <BaseSection style="min-h-[1023px]">
      <Wrapper styles={"flex flex-col md:flex-row"}>
        <Image
          src={BgImages}
          width={1250}
          height={860}
          alt="малюнок із написом 'про нас в цифрах' та сірим логотипом на білому тлі"
          className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 -z-[1] pl-11"
          // style={{ height: "auto" }}
        />
        <Image
          src={BgImagesMobile}
          width={1336}
          height={950}
          alt="малюнок із написом 'про нас в цифрах' та сірим логотипом на білому тлі"
          className="mt-10 md:hidden"
        />
        <NumbersList />
      </Wrapper>
    </BaseSection>
  );
};

export default Values;
