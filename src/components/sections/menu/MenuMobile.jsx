"use client";

import { motion, useCycle } from "framer-motion";
import { aboutLinks, navLinks } from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import MenuLogo from "@/images/menu-logo.svg";
import Cross from "@/images/close.svg";
import Burger from "@/images/burger.svg";
import useScrollBlock from "@/hooks/useScrollBlock";

const menuAnimation = {
  visible: {
    x: 0,
    y: 0,
    width: "100vw",
    height: "100vh",
    opacity: 1,
    transition: { delay: 0.1, duration: 0.4 },
  },
  hidden: {
    x: -100,
    y: -100,
    width: 10,
    height: 10,
    opacity: 0,
    transition: { delay: 0.1, duration: 0.4 },
  },
};

const itemAnimation = {
  visible: custom => ({ y: 0, opacity: 1, transition: { delay: custom + 1.7, duration: 0.5 } }),
  hidden: { y: -90, opacity: 0 },
};

const subItemAnimation = {
  visible: custom => ({ y: 0, opacity: 1, transition: { delay: custom + 0.4, duration: 0.5 } }),
  hidden: { y: -90, opacity: 0 },
};

const imageAnimation = {
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.3 },
  },
  hidden: {
    opacity: 0,
    transition: { delay: 0, duration: 0.0 },
  },
};

const MenuMobile = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navItems = navLinks.slice(1, navLinks.length);

  function toggleMenu() {
    toggleOpen();
    if (isOpen) {
      allowScroll();
    } else {
      blockScroll();
    }
  }

  return (
    <nav className="w-4 md:hidden">
      <button
        onClick={toggleMenu}
        className="absolute top-1/2 -translate-y-1/2 left-0.5 w-[26px] h-[26px] flex items-center justify-center"
      >
        <Image src={Burger} width={26} height={26} alt="іконка відкриття меню" />
      </button>
      <motion.div
        className="fixed top-0 left-0 z-[100] max-h-screen flex flex-col bg-red text-white  px-7"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuAnimation}
      >
        <div className="overflow-scroll w-full h-full flex flex-col gap-4">
          <div className="">
            <button
              onClick={toggleMenu}
              className="absolute top-0.5 left-0.5 w-16 h-16 bg-[#F15B42] flex items-center justify-center"
            >
              <Image src={Cross} width={22} height={22} alt="іконка закриття меню" />
            </button>
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
            >
              <Image
                src={MenuLogo}
                width={186}
                height={64}
                alt="білий логотип Профспілки `Нова Пошта` на червоному фоні"
                className="mx-auto"
              />
            </motion.div>
          </div>
          <div className="pt-10">
            <motion.div
              variants={itemAnimation}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href={navLinks[0].link}
                aria-label={navLinks[0].aria}
                className="uppercase leading-10 font-medium"
                onClick={() => toggleOpen()}
              >
                {navLinks[0].name}
              </Link>
            </motion.div>
            <div className="pl-[30px] flex flex-col text-white">
              {aboutLinks.map((el, index) => (
                <motion.div
                  key={el.link}
                  variants={subItemAnimation}
                  initial="hidden"
                  custom={index * 0.2}
                  animate={isOpen ? "visible" : "hidden"}
                >
                  <Link
                    href={el.link}
                    aria-label={el.aria}
                    key={el.link}
                    className="text-white text-opacity-80 leading-10"
                    onClick={() => toggleOpen()}
                  >
                    {el.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              {navItems.map((el, index) => (
                <motion.div
                  key={el.link}
                  variants={itemAnimation}
                  initial="hidden"
                  custom={index * 0.2}
                  animate={isOpen ? "visible" : "hidden"}
                >
                  <Link
                    href={el.link}
                    aria-label={el.aria}
                    className="uppercase leading-10 font-medium"
                    onClick={() => toggleOpen()}
                  >
                    {el.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default MenuMobile;
