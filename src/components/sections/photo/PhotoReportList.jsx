import BlogItem from "../blog/BlogItem";

const PhotoReportList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <p className="text-center text-red-500">
        Вибачте, при запиті сталася помилка, інформацію не отримано.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
      {items.slice(0, 3).map(el => (
        <BlogItem key={el._id} item={el} />
      ))}
    </div>
  );
};

export default PhotoReportList;
