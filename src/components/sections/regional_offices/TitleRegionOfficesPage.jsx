import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";

const TitleRegionOfficesPage = () => {
  return (
    <BaseSection>
      <Wrapper>
        <PathPage endPath={"Обласні осередки Профспілки"} />
        <h1
          className={`${inter.className} text-5xl font-extrabold leading-[1.25] mt-16 text-center`}
        >
          <span className="text-red">Обласні</span> осередки Профспілки
        </h1>
      </Wrapper>
    </BaseSection>
  );
};

export default TitleRegionOfficesPage;
