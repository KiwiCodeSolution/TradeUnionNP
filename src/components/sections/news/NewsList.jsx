import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <BaseSection>
      <Wrapper styles={"py-24"}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default NewsList;
