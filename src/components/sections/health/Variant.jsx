import Image from "next/image";
import Dashed from "@/images/health/dashed.png";
import { inter } from "@/app/[locale]/(client)/fonts";
import CardTablet from "@/images/health/card_tablet.png";

const Variant = ({ variant }) => {
  return (
    <>
      <article className="w-full lg:w-[360px] h-fit lg:h-[445px] rounded-[20px] flex flex-col overflow-hidden shadow-standardShadow relative md:hidden lg:flex">
        <div className="w-full h-[45px] bg-bgBlack bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white font-medium">{variant.period}</h3>
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-[#f4f4f4] absolute top-[196px] -translate-y-[50%] left-[-17px] z-[3]" />
        <div className="w-[34px] h-[34px] rounded-full bg-[#f4f4f4] absolute top-[196px] -translate-y-[50%] right-[-17px] z-[3]" />
        <Image
          src={Dashed}
          width={360}
          height={4}
          className="absolute top-[196px] -translate-y-[50%]"
          alt="Пунктирна полоска, що імітує лінію відрізу чи відриву"
        />
        <div className="bg-white h-[calc(100%-45px)] flex flex-col gap-y-12 px-[30px] pt-2.5 pb-[22px] xl:px-10 xl:py-5">
          <div className="min-h-[108px]">
            <h4
              className={`text-[25px] xl:text-[30px] ${inter.className} font-extrabold leading-9`}
            >
              {variant.title}
            </h4>
          </div>

          <p className="text-lg">
            {variant.text[0]}
            <strong>{variant.text[1]}</strong>
            {variant.text[2]}
          </p>
        </div>
      </article>

      <article className="w-full hidden h-fit rounded-[20px] md:flex overflow-hidden shadow-standardShadow relative lg:hidden">
        <Image
          src={CardTablet}
          width={640}
          height={234}
          className="absolute top-0 left-0 z-[-1] w-full h-full object-fill"
          alt=""
        />
        <div className="w-1/2 flex flex-col gap-y-[18px] justify-start items-center py-10 px-9">
          <div className="w-full h-[30px] bg-bgBlack bg-opacity-40 flex items-center justify-center rounded-full">
            <h3 className="text-sm text-white font-medium">{variant.period}</h3>
          </div>
          <h4 className={`text-[25px] ${inter.className} font-extrabold leading-8`}>
            {variant.title}
          </h4>
        </div>

        <div className="w-1/2 h-full py-10 px-9">
          <p className="text-lg">
            {variant.text[0]}
            <strong>{variant.text[1]}</strong>
            {variant.text[2]}
          </p>
        </div>
      </article>
    </>
  );
};

export default Variant;
