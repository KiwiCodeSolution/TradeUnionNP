import Image from "next/image";

import FirstIcon from "@/images/home/icon_refugee.svg";
import SecondIcon from "@/images/home/icon_military.svg";
import ThirdIcon from "@/images/home/icon_man.svg";

const NewKinds = () => {
  return (
    <ul className="w-[295px] md:w-full flex flex-col gap-y-5 absolute top-[230px] left-12">
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={FirstIcon} width={47} height={49} alt="червона торбинка на білому тлі" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          <strong>профспілчанам - переселенцям з місць війни</strong> (з довідкою про тимчасову
          реєстрацію місця перебування)
        </p>
      </li>
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={SecondIcon} width={47} height={49} alt="військовий" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          <strong>мобілізованим членам Профспілки</strong> , які отримали поранення
          (травмування/контузія тощо) під час участі в бойових діях та інших випадках, що пов’язані
          з війною
        </p>
      </li>
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={ThirdIcon} width={47} height={49} alt="зображення людини" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          профспілчанам
          <strong>в тимчасово окупованих містах</strong> з 24.02.2022
        </p>
      </li>
    </ul>
  );
};

export default NewKinds;
