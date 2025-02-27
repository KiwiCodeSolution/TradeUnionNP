import Image from "next/image";
import Pmo_1 from "@/images/join/pmo_1.png";
import Pmo_2 from "@/images/join/pmo_2.png";
import Pmo_3 from "@/images/join/pmo_3.png";
import Pmo_4 from "@/images/join/pmo_4.png";
import Pmo_5 from "@/images/join/pmo_5.png";
import ArrowRight from "@/images/join/arrow_right.png";

const ModalPMO = () => {
  return (
    <section className="w-full max-h-[90vh] overflow-auto flex flex-col gap-y-14 pt-8 xl:pt-16">
      <div className="w-full xl:w-[960px] mx-auto relative flex flex-col">
        <Image
          src={ArrowRight}
          width={58}
          height={73}
          alt=""
          className="w-10 h-10 xl:w-[58px] xl:h-[73px] absolute top-[-32px] left-[2px] xl:top-[-58px] xl:left-[12px] rotate-90"
        />

        <Image src={Pmo_1} width={920} height={511} alt="" className="mx-auto" />
      </div>
      <div className="w-full xl:w-[960px] mx-auto relative flex flex-col">
        <Image
          src={ArrowRight}
          width={58}
          height={73}
          alt=""
          className="w-10 h-10 xl:w-[58px] xl:h-[73px] absolute top-[-9px] left-[8px] xl:top-[35px] xl:left-[80px] rotate-90"
        />
        <Image src={Pmo_2} width={920} height={511} alt="" className="mx-auto" />
      </div>
      <div className="w-full xl:w-[960px] mx-auto relative flex flex-col">
        <Image
          src={ArrowRight}
          width={112}
          height={114}
          alt=""
          className="w-10 h-10 xl:w-[112px] xl:h-[114px] absolute top-[70px] left-[135px] xl:top-[200px] xl:left-[430px] rotate-180"
        />
        <Image src={Pmo_3} width={920} height={511} alt="" className="mx-auto" />
      </div>
      <div className="w-full xl:w-[960px] mx-auto relative flex flex-col mt-[14px]">
        <Image
          src={ArrowRight}
          width={112}
          height={114}
          alt=""
          className="w-10 h-10 xl:w-[112px] xl:h-[114px] absolute top-[70px] left-[165px] xl:top-[228px] xl:left-[506px] -rotate-90"
        />
        <Image src={Pmo_4} width={920} height={511} alt="" className="mx-auto" />
      </div>
      <div className="w-full xl:w-[960px] mx-auto relative flex flex-col">
        <Image
          src={ArrowRight}
          width={112}
          height={112}
          alt=""
          className="w-10 h-10 xl:w-[112px] xl:h-[112px] absolute bottom-[15px] right-[60px] xl:bottom-[5px] xl:right-[190px]"
        />
        <Image src={Pmo_5} width={920} height={511} alt="" className="mx-auto mb-5" />
      </div>
    </section>
  );
};

export default ModalPMO;
