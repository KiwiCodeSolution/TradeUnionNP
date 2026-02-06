"use client";

import { inter } from "@/app/[locale]/(client)/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowWhite } from "../icons/IconsComponents";

export default function Collapse({
  image,
  title,
  defaultOpen = false,
  children,
  classNameWrapper,
  index,
  titleClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultOpen ? "auto" : 0);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      const h = el.scrollHeight;
      setHeight(h);

      const t = setTimeout(() => {
        setHeight("auto");
      }, 300);

      return () => clearTimeout(t);
    } else {
      const h = el.scrollHeight;
      setHeight(h);

      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen]);

  return (
    <div className="w-full border-[2px] border-[#EDEDED] bg-[#FAFAFA03]/[0.01] rounded-[32px] collapse-shadow overflow-hidden py-4 px-2 md:p-4 xl:p-8 transition-colors">
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-4 ">
          {image && (
            <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center shrink-0">
              <Image
                src={image}
                width={56}
                height={56}
                alt="Зображення"
                className={`${
                  index === 0
                    ? "w-[22x] h-[25px] md:w-[40px] md:h-[44px]"
                    : index === 1
                      ? "w-[31x] h-[22px] md:w-[54px] md:h-[40px]"
                      : "w-[23px] h-[23px] md:w-[41px] md:h-[41px]"
                } object-contain`}
              />
            </div>
          )}
          <h3
            className={`${inter.className} text-lg md:text-2xl xl:text-[32px] font-bold ${titleClassName}`}
          >
            {title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(v => !v)}
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
            isOpen ? "bg-red -rotate-90" : "bg-black rotate-90"
          }`}
        >
          <ArrowWhite />
        </button>
      </div>

      <div
        ref={contentRef}
        style={{
          height,
          transition: "height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div className={`${classNameWrapper} mt-2`}>{children}</div>
      </div>
    </div>
  );
}
