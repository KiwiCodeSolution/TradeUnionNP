"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/images/menu-logo.svg";
import { useAuth } from "@/context/AuthContext";

const NavAdmin = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  console.log(pathname);

  return (
    <div className="w-1/5 h-screen flex flex-col items-center gap-y-20 bg-red py-10 px-8 rounded-r-2xl">
      <div className="flex flex-col gap-y-5">
        <Image src={Logo} width={200} height={165} alt="Логотип компанії" />
        <p className="text-lg text-white text-center italic">Вітаю, User!</p>
      </div>

      <nav className="h-full flex flex-col gap-y-10 justify-center items-center">
        <NavLink href="/uk/admin/news" currentPath={pathname}>
          Новини
        </NavLink>
        <NavLink href="/uk/admin/photo-report" currentPath={pathname}>
          Фотозвіти
        </NavLink>
        <NavLink href="/uk/admin/contacts" currentPath={pathname}>
          Контакти
        </NavLink>
        <NavLink href="/uk/admin/files" currentPath={pathname}>
          Файли
        </NavLink>
      </nav>
      <button
        className="w-full h-20 mx-auto flex items-center justify-center border border-white text-red font-semibold text-xl bg-white rounded-md hover:bg-red hover:text-white"
        onClick={logout}
      >
        Вийти
      </button>
    </div>
  );
};

const NavLink = ({ href, children, currentPath }) => {
  // Визначення активного стану на основі шляху
  const isActive =
    currentPath === href ||
    (href === "/uk/admin/news" && currentPath.includes("/uk/admin/news")) ||
    (href === "/uk/admin/photo-report" && currentPath.includes("/uk/admin/photo-report"));

  return (
    <Link
      href={href}
      className={`text-2xl text-white font-bold uppercase ${
        isActive ? "underline underline-offset-2" : ""
      } hover:underline hover:underline-offset-2`}
    >
      {children}
    </Link>
  );
};

export default NavAdmin;
