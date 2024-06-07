import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import FilterNews from "./FilterNews";

const NewsSectionHomePage = () => {
  return (
    <BaseSection style={"relative"}>
      <Wrapper styles={"pt-20"}>
        <h2 className="w-full text-center text-[46px] font-extrabold mb-10">Новини</h2>
        <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-gray to-white" />
        <FilterNews />
      </Wrapper>
      <div className="absolute bottom-0 h-64 left-0 right-0 z-0 bg-gradient-to-t from-bgGrey to-white" />
    </BaseSection>
  );
};

export default NewsSectionHomePage;
