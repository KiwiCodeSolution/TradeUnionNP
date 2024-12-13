import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

const Alternative = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <Title tag={"h2"}>
          А що робити, якщо не виграв путівку? Профспілка надає{" "}
          <span className="text-red">пільгові умови у придбанні</span> путівки у партнерські
          пансіонати! 
        </Title>
        <div className="w-full grid grid-cols-2"></div>
      </Wrapper>
    </BaseSection>
  );
};

export default Alternative;
