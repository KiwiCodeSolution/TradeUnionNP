import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOfficesList from "./RegionalOfficesList";

const RegionalOffices = () => {
  return (
    <BaseSection>
      <Wrapper styles={"pt-16"}>
        <h2 className={`text-5xl leading-[1.25] font-extrabold ${inter.className} text-center`}>
          <span className="text-red">Список голів</span> обласних <br /> осередків
        </h2>
        <RegionalOfficesList />
      </Wrapper>
    </BaseSection>
  );
};

export default RegionalOffices;
