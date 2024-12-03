"use client";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { sectionMap, sectionMapEn } from "@/constants/news_sections";
import { Link } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const normalizeText = text => text.replace(/’/g, "'");

const NewsFiltersSection = ({ news, locale, part }) => {
  const searchParams = useSearchParams();
  const [sections, setSections] = useState([]);

  const reverseSectionMap = map => {
    const reversedMap = {};
    Object.entries(map).forEach(([key, value]) => {
      reversedMap[value] = key;
    });
    return reversedMap;
  };

  const reversedSectionMap = reverseSectionMap(sectionMap);

  useEffect(() => {
    const allSections = news.flatMap(item => item.sections.map(section => normalizeText(section)));
    setSections([...new Set(allSections)]);
  }, [news]);

  const getSectionParams = normalizeText(
    searchParams.get("section") || (part === "novyny" ? "novyny" : "foto")
  );

  return (
    <BaseSection style={"pb-8"}>
      <Wrapper styles={""}>
        {sections && (
          <div className="w-full flex items-center justify-center mx-auto">
            {sections.map(el => {
              const currentLink = reversedSectionMap[el]
                ? `/${part}?section=${reversedSectionMap[el]}`
                : `/${part}`;
              const isActive = reversedSectionMap[el] === getSectionParams;

              return (
                <Link
                  href={currentLink}
                  locale={locale}
                  className={`w-full md:w-fit px-6 py-3 xl:px-10 xl:py-3 md:pt-0 md:pb-4 text-lg transition border-solid border-b-2 ${
                    isActive ? "text-red border-red" : "text-bgBlack border-main border-opacity-20"
                  }`}
                  key={el}
                >
                  {el}
                </Link>
              );
            })}
          </div>
        )}
      </Wrapper>
    </BaseSection>
  );
};

export default NewsFiltersSection;
