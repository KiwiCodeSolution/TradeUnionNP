"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/images/menu-logo.svg";

const NavAdmin = () => {
  const pathname = usePathname();

  return (
    <div className="w-1/5 h-full flex flex-col items-center gap-y-20 bg-red py-10 px-8">
      <div className="flex flex-col gap-y-5">
        <Image src={Logo} width={200} height={165} alt="Логотип компанії" />
        <p className="text-lg text-white text-center italic">Hello, User!</p>
      </div>

      <nav className="h-full flex flex-col gap-y-10 justify-center items-center">
        <NavLink href="/admin/news" currentPath={pathname}>
          Новини
        </NavLink>
        <NavLink href="/admin/photo" currentPath={pathname}>
          Фотозвіти
        </NavLink>
        <NavLink href="/admin/contacts" currentPath={pathname}>
          Контакти
        </NavLink>
      </nav>
      <button className="w-full h-20 mx-auto flex items-center justify-center border border-white text-red font-semibold text-xl bg-white rounded-md hover:bg-red hover:text-white">
        Вийти
      </button>
    </div>
  );
};

const NavLink = ({ href, children, currentPath }) => {
  const isActive = currentPath === href;

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
