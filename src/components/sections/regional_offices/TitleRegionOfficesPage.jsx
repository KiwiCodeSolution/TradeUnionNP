import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

const TitleRegionOfficesPage = () => {
  return (
    <BaseSection>
      <Wrapper>
        <PathPage endPath={"Обласні осередки Профспілки"} />
        <Title tag="h1" styles="text-center mt-16">
          <span className="text-red">Обласні</span> осередки Профспілки
        </Title>
      </Wrapper>
    </BaseSection>
  );
};

export default TitleRegionOfficesPage;
