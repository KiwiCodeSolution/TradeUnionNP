"use client";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NewsFiltersSection = ({ news }) => {
  const searchParams = useSearchParams();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const allSections = news.flatMap(item => item.sections);
    setSections([...new Set(allSections)]);
  }, [news]);

  const getSectionParams = searchParams.get("section") || "novyny";

  const sectionMap = {
    Новина: "novyny",
    Звіт: "zvit",
    "Інтерв'ю": "interview",
    Культура: "kultura",
    Наука: "nauka",
  };

  return (
    <BaseSection style={"pb-8"}>
      <Wrapper styles={""}>
        {sections && (
          <div className="w-full flex items-center justify-center mx-auto">
            {sections.map(el => {
              const currentLink = sectionMap[el] ? `/novyny?section=${sectionMap[el]}` : "/novyny";
              const isActive = sectionMap[el] === getSectionParams;

              return (
                <Link
                  href={currentLink}
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
