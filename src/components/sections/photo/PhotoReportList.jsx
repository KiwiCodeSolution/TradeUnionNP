import items from "@/data/photoReports.json";
import BlogItem from "../blog/BlogItem";

const PhotoReportList = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
      {items.map(el => (
        <BlogItem key={el.id} item={el} />
      ))}
    </div>
  );
};

export default PhotoReportList;
