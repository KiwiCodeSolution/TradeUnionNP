"use client";

import DOMPurify from "isomorphic-dompurify";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

const NewsPageComponent = ({ news }) => {
  const { title, author, publishDate, content, sections } = news;

  const renderContent = dirty => {
    const clean = DOMPurify.sanitize(dirty);
    return <div dangerouslySetInnerHTML={{ __html: clean }} />;
  };

  const date = new Date(publishDate).toISOString().split("T")[0];

  return (
    <BaseSection style={""}>
      <Wrapper styles={"flex flex-col py-10 xl:py-16 "}>
        <Title tag={"h1"} styles={"mb-8"}>
          {title}
        </Title>
        <p className="text-[15px] text-liteGrey">{date}</p>
        <p className="text-[15px] text-liteGrey">{author}</p>
        {renderContent(content)}
      </Wrapper>
    </BaseSection>
  );
};

export default NewsPageComponent;
