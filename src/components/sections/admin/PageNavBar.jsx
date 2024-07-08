import SearchInputAdminPage from "./SearchInputAdminPage";

const PageNavBar = () => {
  return (
    <section className="w-full flex gap-x-6 items-center pt-5 px-3">
      <SearchInputAdminPage />
      <div className="w-1/5 h-full flex gap-x-4 items-center">
        <button className="w-1/2 h-full border border-red">Create</button>
        <button className="w-1/2 h-full border border-red">Archive</button>
      </div>
    </section>
  );
};

export default PageNavBar;
