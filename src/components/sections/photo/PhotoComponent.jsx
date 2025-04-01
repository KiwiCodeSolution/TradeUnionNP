import PaginatedItems from "@/components/sections/news/PaginatedItems";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";
import Loader from "@/components/UI/loader/Loader";

const PhotoComponent = ({ locale, items }) => {
  if (!items) {
    return <Loader />;
  }

  const today = new Date();
  const filteredReportsArray = items
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    items.length > 0 && (
      <>
        <NewsFiltersSection news={items} locale={locale} part={"foto"} />
        <PaginatedItems
          part={"photo"}
          section={"photo"}
          items={filteredReportsArray}
          locale={locale}
        />
      </>
    )
  );
};

export default PhotoComponent;
