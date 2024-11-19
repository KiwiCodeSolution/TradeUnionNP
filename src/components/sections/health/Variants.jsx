import BaseSection from "@/components/BaseSection";
import Variant from "./Variant";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";

const Variants = () => {
  return (
    <BaseSection style={"bg-bgGrey pt-9 pb-[96px]"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-8"}>
          Оздоровлення <span className="text-red">профспілчан</span>
        </Title>
        <Variant />
      </Wrapper>
    </BaseSection>
  );
};

export default Variants;
