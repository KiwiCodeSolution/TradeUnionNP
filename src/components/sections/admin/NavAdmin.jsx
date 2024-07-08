import Link from "next/link";

const NavAdmin = () => {
  return (
    <nav className="w-1/5 h-full bg-red flex flex-col gap-y-10 justify-center items-center">
      <Link
        href={"/admin/news"}
        className="text-2xl text-white font-bold uppercase hover:underline hover:underline-offset-2"
      >
        Новини
      </Link>
      <Link
        href={"/admin/photo"}
        className="text-2xl text-white font-bold uppercase hover:underline hover:underline-offset-2"
      >
        Фотозвіти
      </Link>
      <Link
        href={"/admin/contacts"}
        className="text-2xl text-white font-bold uppercase hover:underline hover:underline-offset-2"
      >
        Контакти
      </Link>
    </nav>
  );
};

export default NavAdmin;
