import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { inter } from "@/app/[locale]/fonts";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";

const TitleContactsPage = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={"Контакти"} />

        <Title styles={"text-center"} tag="h1">
          <span className="text-red">Контакти</span> обласних <br /> осередків Профспілки
        </Title>
      </Wrapper>
    </BaseSection>
  );
};

export default TitleContactsPage;
