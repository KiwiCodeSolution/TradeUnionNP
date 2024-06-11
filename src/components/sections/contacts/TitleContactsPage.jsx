import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { inter } from "@/app/fonts";
import PathPage from "@/components/PathPage";

const TitleContactsPage = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={"Контакти"} />
        <h1 className={`text-5xl leading-[1.25] font-extrabold ${inter.className} text-center`}>
          <span className="text-red">Контакти</span> обласних <br /> осередків Профспілки
        </h1>
      </Wrapper>
    </BaseSection>
  );
};

export default TitleContactsPage;
