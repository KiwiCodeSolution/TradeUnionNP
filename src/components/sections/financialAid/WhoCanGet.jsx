import Image from "next/image";
import Check from "@/images/bullet.svg";

const WhoCanGet = () => {
  return (
    <ul className="flex flex-col gap-y-5">
      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey">лише профспiлчани;</p>
      </li>

      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey">з наданими підтверджуючими документами;</p>
      </li>

      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey">в Профспілці більше 6 місяців.</p>
      </li>
    </ul>
  );
};

export default WhoCanGet;
