import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_3.png";
import ScreenMob from "@/images/join/screen_3_mob.png";

import Screen_1 from "@/images/join/screen_4.png";
import ArrowRightImg from "@/images/join/arrow_right.png";
import SignatureImg from "@/images/join/signature.png";

const Signature = ({ clName }) => {
  return (
    <div className={`w-[120px] xl:w-[424px] flex items-center absolute ${clName}`}>
      <Image
        src={ArrowRightImg}
        width={48}
        height={48}
        alt=""
        className="w-6 h-6 xl:w-12 xl:h-12 mr-1 xl:mr-3"
      />
      <p className="text-red text-[6px] xl:text-base leading-[1.21] font-extrabold mr-[2px] xl:mr-3">
        ХХ
      </p>
      <p className="text-red text-[6px] xl:text-base leading-[1.21] font-extrabold mr-2 xl:mr-8">
        ХХ
      </p>
      <p className="text-red text-[6px] xl:text-base leading-[1.21] font-extrabold mr-4 xl:mr-[95px]">
        ХХ
      </p>
      <Image
        src={SignatureImg}
        width={98}
        height={50}
        alt=""
        className="w-[44px] h-[20px] xl:w-[98px] xl:h-[50px] mr-2 xl:mr-8"
      />
      <Image
        src={ArrowRightImg}
        width={48}
        height={48}
        alt=""
        className="w-6 h-6 xl:w-12 xl:h-12 rotate-180"
      />
    </div>
  );
};

const StepsFiveAndSix = () => {
  return (
    <BaseSection style={""}>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white top-0 z-[0]" />
      <Wrapper styles={"relative"}>
        <div className="bg-white rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">Крок 5. </span>
            Нижче вкажи сьогоднішню дату та постав свій підпис.
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">
            Обов’язково постав хрестик у потрібному квадратику, який вказувати чи маєш ти дітей
            віком до 14 років. Якщо маєш, впиши їхню дату народження та прізвище, ім’я, по батькові
            українською мовою в називному відмінку.
          </p>
          <div className="w-[275px] md:w-[650px] xl:w-[910px] mx-auto relative">
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 md:w-12 md:h-12 absolute bottom-[5px] left-[-5px] md:bottom-[20px] md:left-0 xl:bottom-[65px] xl:left-[128px]"
            />
            <Image src={Screen} width={960} height={292} alt="" className="w-full mx-auto " />
            <div className="w-[120px] xl:w-[424px] flex items-center absolute top-[20px] xl:top-[333px] md:top-[49px] right-[27px] md:right-[212px] xl:right-[162px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 mr-1 md:mr-2 xl:mr-3"
              />
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-[2px] mf:mr-3">
                ХХ
              </p>
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-2 md:mr-4 xl:mr-8">
                ХХ
              </p>
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-4 md:mr-[50px] xl:mr-[95px]">
                ХХ
              </p>
              <Image
                src={SignatureImg}
                width={98}
                height={50}
                alt=""
                className="w-[44px] h-[20px] md:w-[88px] md:h-[41px] xl:w-[98px] xl:h-[50px] mr-2 xl:mr-8"
              />
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 rotate-180"
              />
            </div>
          </div>
          {/* <Image
            src={ArrowRightImg}
            width={48}
            height={48}
            alt=""
            className="w-6 h-6 xl:w-12 xl:h-12 absolute bottom-[32px] left-[10px] xl:bottom-[65px] xl:left-[128px]"
          />
          <Image src={Screen} width={960} height={292} alt="" className="w-full mx-auto " />

          <div className="w-[120px] xl:w-[424px] flex items-center absolute top-[470px] xl:top-[333px] right-[43px] xl:right-[162px]">
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 xl:w-12 xl:h-12 mr-1 xl:mr-3"
            />
            <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-[2px] xl:mr-3">
              ХХ
            </p>
            <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-2 xl:mr-8">
              ХХ
            </p>
            <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-4 xl:mr-[95px]">
              ХХ
            </p>
            <Image
              src={SignatureImg}
              width={98}
              height={50}
              alt=""
              className="w-[44px] h-[20px] xl:w-[98px] xl:h-[50px] mr-2 xl:mr-8"
            />
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 xl:w-12 xl:h-12 rotate-180"
            />
          </div> */}
        </div>

        <div className="bg-white mt-10 rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections z-[1]">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">Крок 6. </span>
            Під пунктирною лінією ти побачиш додаткову заяву. Її теж треба заповнити.
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">
            Напиши своє прізвище, ім’я, по батькові українською мовою в родовому відмінку. Нижче
            постав сьогоднішню дату та свій підпис.
          </p>
          <div className="w-[275px] md:w-[650px] xl:w-[910px] mx-auto relative">
            <div className="absolute top-[8px] right-[15px] flex items-center gap-x-1 xl:gap-x-9">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 "
              />
              <p className="w-[80px] xl:w-[275px] text-red text-[7px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                Прізвище, імʼя, по батькові
              </p>
            </div>
            <Image src={Screen_1} width={960} height={292} alt="" className="w-full mx-auto" />
            <div className="w-[120px] xl:w-[424px] flex items-center absolute bottom-[-3px] xl:top-[333px] right-[26px] xl:right-[162px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 mr-1 xl:mr-3"
              />
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-[2px] xl:mr-3">
                ХХ
              </p>
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-2 xl:mr-8">
                ХХ
              </p>
              <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-4 xl:mr-[95px]">
                ХХ
              </p>
              <Image
                src={SignatureImg}
                width={98}
                height={50}
                alt=""
                className="w-[44px] h-[20px] xl:w-[98px] xl:h-[50px] mr-2 xl:mr-8"
              />
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 rotate-180"
              />
            </div>
          </div>
          {/* <div className="absolute top-[351px] right-[165px] flex items-center gap-x-9">
            <Image src={ArrowRightImg} width={48} height={48} alt="" className="" />
            <p className="w-[257px] text-red text-xl leading-[1.21] font-extrabold text-center">
              Прізвище, імʼя, по батькові
            </p>
          </div>

          <Image src={Screen_1} width={960} height={292} alt="" className="w-full mx-auto" />
          <div className="w-[424px] flex items-center absolute bottom-[32px] right-[162px]">
            <Image src={ArrowRightImg} width={48} height={48} alt="" className="mr-3" />
            <p className="text-red text-base leading-[1.21] font-extrabold mr-3">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-8">ХХ</p>
            <p className="text-red text-base leading-[1.21] font-extrabold mr-[95px]">ХХ</p>
            <Image src={SignatureImg} width={98} height={50} alt="" className="mr-8" />
            <Image src={ArrowRightImg} width={48} height={48} alt="" className="rotate-180" />
          </div> */}
        </div>
      </Wrapper>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0] rotate-180" />
    </BaseSection>
  );
};

export default StepsFiveAndSix;
