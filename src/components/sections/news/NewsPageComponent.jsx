"use client";

import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { BaseURLImage } from "@/constants/BaseUrl";
import { sanitizeNewsHtml } from "@/utils/sanitizeNewsHtml";

const fixLocalhostUrls = html => {
  // заміна http://localhost:3000 або https://localhost:3000 будь-де в контенті
  return html
    .replace(/https?:\/\/localhost:3000/gi, BaseURLImage)
    .replace(/(\.\.\/)+uploads/gi, `${BaseURLImage}/uploads`);
};

const NewsPageComponent = ({ news }) => {
  const { title, author, publishDate, content } = news;

  const renderContent = dirty => {
    const fixed = fixLocalhostUrls(dirty);
    const clean = sanitizeNewsHtml(fixed);
    // відео з редактора та старого сайту мають у style фіксовані px і position:absolute — робимо адаптивними
    return (
      <div
        className="[&_iframe]:!static [&_iframe]:!h-auto [&_iframe]:!w-full [&_iframe]:aspect-video [&_iframe]:max-w-full"
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    );
  };

  const date = new Date(publishDate).toISOString().split("T")[0];

  return (
    <BaseSection>
      <Wrapper styles="flex flex-col py-10 xl:py-16">
        <Title tag="h1" styles="mb-8">
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
