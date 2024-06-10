"use client";

import ArrowRed from "@/images/arrow_up.svg";
import Image from "next/image";

const UpButton = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="w-[50px] h-[50px] rounded-full border-4 border-red absolute top-1/3 right-28 flex items-center justify-center hover:shadow-upButton"
    >
      <Image src={ArrowRed} height={27} width={23} className="" alt="червона стрілочка вгору" />
    </button>
  );
};

export default UpButton;
