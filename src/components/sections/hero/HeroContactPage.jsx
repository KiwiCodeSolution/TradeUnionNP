import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Map from "../contacts/Map";
import PathPage from "@/components/PathPage";
import { inter } from "@/app/fonts";

const HeroContactPage = () => {
  return (
    <BaseSection>
      <Wrapper>
        <PathPage endPath={"Контакти"} />
        <h1
          className={`${inter.className} text-[48px] font-extrabold leading-[1.25] text-center my-16`}
        >
          <span className="text-red">Контакти</span> обласних <br /> осередків Профспілки
        </h1>
        <Map />
      </Wrapper>
    </BaseSection>
  );
};

export default HeroContactPage;
