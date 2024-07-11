import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ResolutionList from "./ResolutionList";

const ResolutionPeriod = ({ gradient }) => {
  return (
    <BaseSection>
      {gradient && (
        <div className="absolute h-96 left-0 right-0 bg-gradient-to-t from-bgGrey to-white top-0 z-0" />
      )}

      <Wrapper styles={"pt-24 md:pt-32 md:pb-10"}>
        <Title tag={"h2"} styles={"text-center mb-8 z-[10] relative"}>
          Зазвичай прості звернення <br />{" "}
          <span className="text-red">вирішуються у два листи!</span>
        </Title>
        <ResolutionList />
      </Wrapper>
    </BaseSection>
  );
};

export default ResolutionPeriod;
