import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ProjectsSwiper from "./ProjectsSwiper";

const RecreationProjects = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <div className="absolute h-52 left-0 right-0 bg-gradient-to-b from-white to-bgGrey z-0 top-0" />
      <Wrapper styles={"pt-16 md:pt-32 md:pb-10 flex"}>
        <div className="w-1/5 relative pt-4">
          <Title tag={"h2"}>Проєкти</Title>
        </div>

        <ProjectsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default RecreationProjects;
