"use client";

import { useEffect } from "react";
import { useStore } from "@/store/StoreProvider";
import PaginatedItems from "@/components/sections/news/PaginatedItems";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";
import { observer } from "mobx-react-lite";
import Loader from "@/components/UI/loader/Loader";
import { useRouter, useSearchParams } from "next/navigation";

const PhotoComponent = observer(({ locale }) => {
  const { photoReportsStore } = useStore();
  const allReports = photoReportsStore.photoReports || [];
  const isLoading = photoReportsStore.isLoading;
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("section") && !searchParams.get("page")) {
      const defaultSection = "vse";
      const defaultPage = 1;
      const path = `/${locale}/foto`;

      const newURL = `${path}?section=${defaultSection}&page=${defaultPage}`;

      if (!searchParams.get("section") || !searchParams.get("page")) {
        router.replace(newURL, undefined, { shallow: true });
      }
    }
  }, [locale, searchParams, router]);

  useEffect(() => {
    if (!photoReportsStore.photoReports.length && !isLoading) {
      photoReportsStore.fetchAllReports();
    }
  }, [photoReportsStore, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  const today = new Date();
  const filteredReportsArray = allReports
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    allReports.length > 0 && (
      <>
        <NewsFiltersSection news={allReports} locale={locale} part={"foto"} />
        <PaginatedItems
          part={"photo"}
          section={"photo"}
          items={filteredReportsArray}
          locale={locale}
        />
      </>
    )
  );
});

export default PhotoComponent;
