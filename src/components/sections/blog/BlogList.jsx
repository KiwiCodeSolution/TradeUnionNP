import BlogItem from "./BlogItem";
import items from "@/data/blogs.json";

const BlogList = ({ pageName }) => {
  const currentItems = items.filter(el => el.pageName === pageName);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
      {currentItems.map(el => (
        <BlogItem key={el.id} item={el} />
      ))}
    </div>
  );
};

export default BlogList;
