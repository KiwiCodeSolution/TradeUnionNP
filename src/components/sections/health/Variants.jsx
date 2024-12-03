import BaseSection from "@/components/BaseSection";
import Variant from "./Variant";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";

const Variants = () => {
  return (
    <BaseSection style={"bg-health-gradient pt-9 pb-[96px]"}>
      {/* <div className="w-full h-full absolute top-0 left-0 z-[1] " /> */}
      <Wrapper styles={"relative z-[2]"}>
        <Title tag={"h2"} styles={"text-center mb-8"}>
          Оздоровлення <span className="text-red">профспілчан</span>
        </Title>
        <Variant />
      </Wrapper>
    </BaseSection>
  );
};

export default Variants;
