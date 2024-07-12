import NewsItem from "./NewsItem";

const NewsList = currentItems => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
      {currentItems.map(item => (
        <NewsItem />
      ))}
    </div>
  );
};

export default NewsList;
