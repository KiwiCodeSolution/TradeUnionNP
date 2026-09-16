"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import ListItem from "@/components/UI/items/ListItem";

const AppealTypes = () => {
  const t = useTranslations("Appeal");
  const [activeIndex, setActiveIndex] = useState(0);

  const types = [0, 1, 2].map(index => ({
    name: t(`appeal_types.${index}.name`),
    text: t(`appeal_types.${index}.text`),
    term: t(`appeal_types.${index}.term`),
    examplesTitle: t(`appeal_types.${index}.examples_title`),
    examples: t.raw(`appeal_types.${index}.examples`),
  }));

  const active = types[activeIndex];

  return (
    <BaseSection style={"py-16"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-12"}>
          {t(`appeal_types_title.0`)}
          <span className="text-red">{t(`appeal_types_title.1`)}</span>
          {t(`appeal_types_title.2`)}
        </Title>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
          <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 md:gap-0">
            {types.map((type, index) => (
              <button
                key={type.name}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-5 py-6 md:px-8 md:py-8 rounded-2xl md:rounded-l-2xl md:rounded-r-none text-base md:text-lg font-bold transition-colors ${
                  index === activeIndex ? "bg-red text-white" : "bg-white text-black-100"
                } ${index !== 0 ? "md:mt-1" : ""}`}
              >
                {type.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 bg-white rounded-2xl md:rounded-tsl-none p-6 md:p-10 flex flex-col gap-y-5">
            <p className="text-lg text-grey">{active.text}</p>
            <p className="text-lg font-bold text-black-100">{active.term}</p>
            <div>
              <p className="text-lg font-bold text-black-100 mb-3">{active.examplesTitle}</p>
              <ul className="flex flex-col gap-y-3">
                {active.examples.map(example => (
                  <ListItem item={example} gap={4} key={example} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default AppealTypes;
