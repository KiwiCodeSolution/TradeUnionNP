import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import FilterNews from "./FilterNews";
import Title from "@/components/Title";
import LinkButton from "@/components/UI/buttons/LinkButton";

const NewsSectionHomePage = () => {
  return (
    <BaseSection style={"relative"}>
      <Wrapper styles={"pt-20 h-fit"}>
        <Title tag="h2" styles="text-center mb-10">
          Новини
        </Title>

        <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-gray to-white" />
        <FilterNews />
        <LinkButton
          view={"transparent"}
          goTo={"/novyny"}
          icon
          style={
            "border border-red mt-9 mx-auto relative z-[7] py-[15px] px-[33px] rounded-full w-fit uppercase flex items-center justify-between gap-x-5 text-[14px] font-bold"
          }
        >
          Всі новини
        </LinkButton>
      </Wrapper>
      <div className="absolute bottom-0 h-64 left-0 right-0 z-0 bg-gradient-to-t from-bgGrey to-white" />
    </BaseSection>
  );
};

export default NewsSectionHomePage;
