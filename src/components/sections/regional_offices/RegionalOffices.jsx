import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOffice from "./RegionalOffice";
import offices from "@/data/ppo.json";

const RegionalOffices = () => {
  return (
    <BaseSection style={""}>
      <Wrapper styles={"py-16"}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 xl:gap-16">
          {offices.map(el => (
            <RegionalOffice key={el.region} item={el} />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default RegionalOffices;
