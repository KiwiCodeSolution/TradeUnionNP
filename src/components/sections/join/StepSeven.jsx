import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_5.png";
import ArrowRightImg from "@/images/join/arrow_right.png";
import SignatureImg from "@/images/join/signature.png";
import Hand from "@/images/join/hand.png";
import Man from "@/images/recreations/activity.svg";

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

const ArrowRight = ({ clName }) => {
  return (
    <Image
      src={ArrowRightImg}
      width={48}
      height={48}
      alt=""
      className={`absolute bottom-[65px] left-[128px] ${clName}`}
    />
  );
};

const StepSeven = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative pb-8 xl:pb-[112px]"}>
        <div className="bg-white my-10 rounded-20 relative py-6 px-3 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">Крок 7. </span>
            Перевір, чи все заповнено.
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">
            Простежте, щоб всі поля, які позначені червоними елементами були заповнені.
          </p>
          <div className="w-[275px] xl:w-[906px] relative mx-auto">
            <Image src={Screen} width={960} height={972} alt="" className="w-full mx-auto" />
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 xl:w-12 xl:h-12 absolute top-[145px] left-[-5px]"
            />
            <Signature clName={"top-[110px] right-[27px] xl:top-[577px] xl:right-[162px]"} />
            <Signature clName={"bottom-[-2px] right-[27px] xl:bottom-[35px] xl:right-[162px]"} />
            <div className="w-[90px] xl:w-[450px] h-[48px] flex items-start justify-center absolute top-[8px] right-[10px] xl:right-[98px] xl:top-[176px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 xl:w-12 xl:h-12 absolute top-0 left-[-35px]"
              />
              <div>
                <p className="text-red text-[6px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center xl:mt-[13px] mb-[17px] xl:mb-[54px]">
                  Область, у якій працюєте
                </p>
                <p className="text-red text-[6px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center mb-[21px] xl:mb-[75px]">
                  Прізвище, імʼя, <br />
                  по батькові
                </p>
                <p className="text-red text-[6px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center mb-[9px] xl:mb-[34px]">
                  ХХХХХХХХХХ
                </p>
                <p className="text-red text-[6px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                  +380ХХХХХХХХ
                </p>
              </div>
            </div>
            <div className="flex gap-x-8 xl:gap-x-20 items-center absolute bottom-[73px] right-[32px] xl:bottom-[304px] xl:right-[225px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 xl:w-12 xl:h-12 "
              />
              <p className="text-red text-[6px] leading-[1] xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                Прізвище, імʼя, <br />
                по батькові
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-[380px] xl:mt-[100px] rounded-20 relative py-6 px-3 xl:py-[34px] pl-6 xl:pr-[244px] shadow-joinSections flex flex-col gap-y-10 xl:flex-row items-center gap-x-10">
          <Image src={Hand} width={100} height={100} alt="" className="" />
          <p className="text-[17px] xl:text-xl font-bold leading-[1.5]">
            Вітаю! Ти заповнив заяву на вступ до Профспілки. Ми майже разом! Цю заяву ти маєш
            віднести своєму керівнику, який допоможе відправити її за шаблоном внутрішніх відправок
            Голові твого осередку Профспілки. Вітаємо в родині профспілчан!
          </p>
          <Image
            src={Man}
            width={292}
            height={460}
            alt=""
            className="absolute bottom-[460px] h-[324px] xl:h-[460px] xl:-bottom-[112px] right-0"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepSeven;
