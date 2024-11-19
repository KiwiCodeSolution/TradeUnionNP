import Image from "next/image";
import Dashed from "@/images/health/dashed.png";
import { inter } from "@/app/[locale]/(client)/fonts";

const Variant = () => {
  return (
    <article className="w-[360px] h-[445px] rounded-[20px] flex flex-col overflow-hidden drop-shadow-standardShadow relative">
      <div className="w-full h-[45px] bg-bgBlack bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white font-medium">щорічно, влітку та взимку</h3>
      </div>
      <div className="w-[34px] h-[34px] rounded-full bg-bgGrey absolute top-[196px] -translate-y-[50%] left-[-17px] z-[3]" />
      <div className="w-[34px] h-[34px] rounded-full bg-bgGrey absolute top-[196px] -translate-y-[50%] right-[-17px] z-[3]" />
      <Image
        src={Dashed}
        width={360}
        height={4}
        className="absolute top-[196px] -translate-y-[50%]"
        alt="Пунктирна полоска, що імітує лінію відрізу чи відриву"
      />
      <div className="bg-white h-[calc(100%-45px)] flex flex-col gap-y-12 px-10 py-5">
        <h4 className={`text-[30px] ${inter.className} font-extrabold leading-9`}>
          Путівки на оздоровлення профспілчан
        </h4>
        <p className="text-lg">
          Путівки на оздоровлення{" "}
          <strong> розподіляються між первинним профспілковими організаціями</strong> за рішенням
          центрального комітету за квотами пропорційно до кількості членів ППО та бюджету ППО
        </p>
      </div>
    </article>
  );
};

export default Variant;
