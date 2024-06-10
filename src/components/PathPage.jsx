import Link from "next/link";

const PathPage = ({ endPath }) => {
  return (
    <div className="w-full flex gap-x-2 text-[15px] text-grey my-6">
      <Link href="/" className="hover:underline hover:underline-offset-2 hover:text-red">
        Головна
      </Link>
      <span>/</span>
      <h3>{endPath}</h3>
    </div>
  );
};

export default PathPage;
