const SkeletonBlogItem = () => {
  return (
    <article className="relative w-full h-[400px] bg-white rounded-xl animate-pulse">
      <div className="absolute top-3 left-3 w-fit h-[29px] flex items-center justify-between px-2 bg-gray-300 rounded-md">
        <div className="h-3 w-16 bg-gray-400 rounded"></div>
        <div className="h-3 w-16 bg-gray-400 rounded"></div>
      </div>
      <div className="h-[210px] overflow-hidden bg-gray-200 rounded-t-xl">
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <ul className="flex flex-col p-7 gap-y-6 pb-4">
        <li className="flex gap-x-2 items-center text-[15px] text-gray-400">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div className="w-24 h-3 bg-gray-400 rounded"></div>
        </li>
        <li>
          <div className="w-48 h-5 bg-gray-400 rounded mb-3"></div>
        </li>
      </ul>
    </article>
  );
};

export default SkeletonBlogItem;
