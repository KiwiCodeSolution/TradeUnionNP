import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_3.png";
import Screen_1 from "@/images/join/screen_4.png";
import ArrowRight from "@/images/join/arrow_right.png";
import Signature from "@/images/join/signature.png";

const StepsFiveAndSix = () => {
  return (
    <BaseSection style={""}>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white top-0 z-[0]" />
      <Wrapper styles={"relative"}>
        <div className="bg-white rounded-20 relative py-6 px-[100px] shadow-joinSections">
          <Title tag={"h1"} styles={"text-center"}>
            <span className="text-red">Крок 5. </span>
            Нижче вкажи сьогоднішню дату та постав свій підпис.
          </Title>
          <p className="text-lg mt-8 mb-3">
            Обов’язково постав хрестик у потрібному квадратику, який вказувати чи маєш ти дітей
            віком до 14 років. Якщо маєш, впиши їхню дату народження та прізвище, ім’я, по батькові
            українською мовою в називному відмінку.
          </p>
          <Image
            src={ArrowRight}
            width={48}
            height={48}
            alt=""
            className="absolute bottom-[65px] left-[128px]"
          />
          <Image src={Screen} width={960} height={292} alt="" className="w-full mx-auto" />
          <div className="w-[424px] flex items-center absolute top-[333px] right-[162px]">
            <Image src={ArrowRight} width={48} height={48} alt="" className="mr-3" />
            <p className="text-red text-base leading-[1.21] font-extrabold mr-3">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-8">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-[95px]">ХХ</p>
            <Image src={Signature} width={98} height={50} alt="" className="mr-8" />
            <Image src={ArrowRight} width={48} height={48} alt="" className="rotate-180" />
          </div>
        </div>

        <div className="bg-white rounded-20 relative py-6 px-[100px] shadow-joinSections z-[1]">
          <Title tag={"h1"} styles={"text-center"}>
            <span className="text-red">Крок 6. </span>
            Під пунктирною лінією ти побачиш додаткову заяву. Її теж треба заповнити.
          </Title>
          <p className="text-lg mt-8 mb-3">
            Напиши своє прізвище, ім’я, по батькові українською мовою в родовому відмінку. Нижче
            постав сьогоднішню дату та свій підпис.
          </p>
          <div className="absolute top-[351px] right-[165px] flex items-center gap-x-9">
            <Image src={ArrowRight} width={48} height={48} alt="" className="" />
            <p className="w-[257px] text-red text-xl leading-[1.21] font-extrabold text-center">
              Прізвище, імʼя, по батькові
            </p>
          </div>

          <Image src={Screen_1} width={960} height={292} alt="" className="w-full mx-auto" />
          <div className="w-[424px] flex items-center absolute bottom-[32px] right-[154px]">
            <Image src={ArrowRight} width={48} height={48} alt="" className="mr-3" />
            <p className="text-red text-base leading-[1.21] font-extrabold mr-3">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-8">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-[95px]">ХХ</p>
            <Image src={Signature} width={98} height={50} alt="" className="mr-8" />
            <Image src={ArrowRight} width={48} height={48} alt="" className="rotate-180" />
          </div>
        </div>
      </Wrapper>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0] rotate-180" />
    </BaseSection>
  );
};

export default StepsFiveAndSix;
