import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import PhotoReportList from "../photo/PhotoReportList";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Title from "@/components/Title";

const PhotoReports = () => {
  return (
    <BaseSection style={""}>
      <Wrapper styles={"min-h-[840px] py-16 xl:py-32"}>
        <Title tag={"h2"} styles={"text-center mb-10"}>
          <span className="text-red">Фотозвіти</span> з культурно - <br />
          масових заходів
        </Title>
        <PhotoReportList />

        <LinkButton
          view={"transparent"}
          goTo={"/news"}
          icon
          style={
            "border border-red mt-9 mx-auto relative z-[7] py-[15px] px-[33px] rounded-full w-fit uppercase flex items-center justify-between gap-x-5 text-[14px] font-bold"
          }
        >
          Всі новини
        </LinkButton>
      </Wrapper>
    </BaseSection>
  );
};

export default PhotoReports;
