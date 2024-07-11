import { ArrowNews } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ item }) => {
  return (
    <Link href={"/slug"}>
      <article className="w-full flex gap-x-3 md:gap-x-6 items-start mx-auto md:py-8 md:px-4">
        <div className="w-12 flex flex-col">
          <p className="text-[15px] text-center">2024</p>
          <p className="text-[15px] text-center border-grey border-y-[2px] py">лип</p>
          <p className="text-[15px] text-center">8</p>
        </div>
        <div className="w-[calc(100%-48px-12px)] md:w-[calc(100%-48px-24px)] border border-red">
          <Link href={"/novyny"} className="">
            <h3 className="text-[#6366f1] uppercase text-[15px] tracking-widest font-medium">
              новини
            </h3>
          </Link>
          <div className="rounded-lg h-64 overflow-hidden mb-4">
            <Image className="w-full h-full object-cover object-center" src={""} />
          </div>
          <h2 className="text-liteGrey font-medium text-[22px] mb-3">
            Звіт: матеріальна допомога у червні 2024
          </h2>
          <p className="text-[15px] mb-5">
            У червні 2024 року Профспілка надала матеріальну допомогу 86 профспілчанам на загальну
            суму 293 671 грн! Детальніше у повному тексті.
          </p>
          <Link href={"/slug"} className="text-[#6366f1] flex items-center gap-x-1">
            <h3 className="text-[#6366f1] text-[15px] font-medium">Читати</h3>
            <ArrowNews />
          </Link>
        </div>
      </article>
    </Link>
  );
};

export default NewsItem;
