import Link from "next/link";
import SearchInputAdminPage from "./SearchInputAdminPage";

const PageNavBar = ({ goTo, toggleArchive, isArchive }) => {
  return (
    <section className="w-full flex gap-x-4 items-end pt-5 px-3">
      <SearchInputAdminPage />
      <div className="w-1/5 h-full flex gap-x-2 items-center">
        <Link
          className="w-[105px] h-fit px-3 py-2 border border-red rounded-xl text-red hover:bg-red hover:text-white"
          href={goTo}
        >
          Створити
        </Link>
        <button
          className="w-[105px] h-fit px-3 py-2 border border-red rounded-xl text-red hover:bg-red hover:text-white"
          onClick={toggleArchive}
        >
          {isArchive ? "Актуальне" : "Архів"}
        </button>
      </div>
    </section>
  );
};

export default PageNavBar;
