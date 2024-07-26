import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RightsList from "./RightsList";
import Title from "@/components/Title";

const ProtectionRights = () => {
  return (
    <BaseSection style={""}>
      <Wrapper styles={"pt-24 md:pt-32 pb-8"}>
        <Title tag="h2" styles="text-center">
          Кожен працівник <span className="text-red">має право на:</span>
        </Title>

        <RightsList />
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionRights;
