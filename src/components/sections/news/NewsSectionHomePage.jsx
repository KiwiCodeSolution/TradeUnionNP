"use client";
import { useEffect, useState } from "react";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import FilterNews from "./FilterNews";
import Title from "@/components/Title";

const NewsSectionHomePage = ({ locale, page }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return locale === "uk" ? (
    <BaseSection style={"relative"}>
      <Wrapper styles={"pt-20 h-fit"}>
        {page === "join" && (
          <div className="absolute top-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white rotate-180" />
        )}
        <Title tag="h2" styles="text-center mb-10 relative z-[6]">
          {page !== "join" ? (
            "Новини"
          ) : (
            <>
              Останні <span className="text-red">новини</span>
            </>
          )}
        </Title>

        {page !== "join" && (
          <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-bgGrey to-white" />
        )}
        <FilterNews locale={locale} />
      </Wrapper>
      {page !== "join" && (
        <div className="absolute bottom-0 h-64 left-0 right-0 z-0 bg-gradient-to-t from-bgGrey to-white" />
      )}
    </BaseSection>
  ) : null;
};

export default NewsSectionHomePage;
