import PaginatedItems from "@/components/sections/news/PaginatedItems";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";
import Loader from "@/components/UI/loader/Loader";

const NewsComponent = ({ locale, items }) => {
  if (!items) {
    return <Loader />;
  }

  const today = new Date();
  const filteredNewsArray = items
    // .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .filter(item => item.status === "published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <>
      <NewsFiltersSection news={items} locale={locale} part={"novyny"} />
      {items && (
        <PaginatedItems section={"news"} items={filteredNewsArray} locale={locale} part={"news"} />
      )}
    </>
  );
};

export default NewsComponent;
