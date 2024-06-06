import Image from "next/image";
import Info from "@/images/home/icon_info-red.svg";
import Shield from "@/images/home/icon_shield-red.svg";

const Helps = () => {
  return (
    <ul className="w-full flex gap-4 mt-4">
      <li className="w-full flex flex-col gap-y-4">
        <div className="w-full h-[41px] flex items-center justify-start gap-x-4">
          <Image
            src={Info}
            width={30}
            height={31}
            alt="зображення окличного знаку білого кольору у червоному колі"
          />
          <h3 className="text-[22px] font-bold inter">Інформаційна</h3>
        </div>
        <p>дізнатися контакти, місця, як дістатися, як скористатися, куди бігти, як працює;</p>
      </li>
      <li className="w-full flex flex-col gap-y-4">
        <div className="w-full h-[41px] flex items-center justify-start gap-x-4">
          <Image
            src={Shield}
            width={41}
            height={41}
            alt="зображення червоного щита з трьома білими крапками"
          />
          <h3 className="text-[22px] font-bold inter">Інші можливі послуги</h3>
        </div>
        <p>
          для забезпечення базових потреб члена Профспілки та допомоги йому в скрутній ситуації.
        </p>
      </li>
    </ul>
  );
};

export default Helps;
