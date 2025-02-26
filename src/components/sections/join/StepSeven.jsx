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
    <div className={`w-[424px] flex items-center absolute ${clName}`}>
      <Image src={ArrowRightImg} width={48} height={48} alt="" className="mr-3" />
      <p className="text-red text-base leading-[1.21] font-extrabold mr-3">ХХ</p>
      <p className="text-red text-base leading-[1.21] font-extrabold mr-8">ХХ</p>
      <p className="text-red text-base leading-[1.21] font-extrabold mr-[95px]">ХХ</p>
      <Image src={SignatureImg} width={98} height={50} alt="" className="mr-8" />
      <Image src={ArrowRightImg} width={48} height={48} alt="" className="rotate-180" />
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
      <Wrapper styles={"relative pb-[112px]"}>
        <div className="bg-white my-10 rounded-20 relative py-6 px-[100px] shadow-joinSections">
          <Title tag={"h1"} styles={"text-center"}>
            <span className="text-red">Крок 7. </span>
            Перевір, чи все заповнено.
          </Title>
          <p className="text-lg mt-8 mb-3">
            Простежте, щоб всі поля, які позначені червоними елементами були заповнені.
          </p>

          <Image src={Screen} width={960} height={972} alt="" className="w-full mx-auto" />
          <Signature clName={"top-[577px] right-[156px]"} />
          <Signature clName={"bottom-[35px] right-[156px]"} />
          <div className="w-[450px] h-[48px] flex items-start justify-center absolute right-[98px] top-[176px]">
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="absolute top-0 left-0"
            />
            <div>
              <p className="text-red text-xl leading-[1.21] font-extrabold text-center mt-[13px] mb-[54px]">
                Область, у якій працюєте
              </p>
              <p className="text-red text-xl leading-[1.21] font-extrabold text-center mb-[75px]">
                Прізвище, імʼя, <br />
                по батькові
              </p>
              <p className="text-red text-xl leading-[1.21] font-extrabold text-center mb-[34px]">
                ХХХХХХХХХХ
              </p>
              <p className="text-red text-xl leading-[1.21] font-extrabold text-center">
                +380ХХХХХХХХ
              </p>
            </div>
          </div>
          <div className="flex gap-x-20 items-center absolute bottom-[304px] right-[225px]">
            <Image src={ArrowRightImg} width={48} height={48} alt="" className="" />
            <p className="text-red text-xl leading-[1.21] font-extrabold text-center">
              Прізвище, імʼя, <br />
              по батькові
            </p>
          </div>
        </div>
        <div className="bg-white mt-[100px] rounded-20 relative py-[34px] pl-6 pr-[244px] shadow-joinSections flex items-center gap-x-10">
          <Image src={Hand} width={100} height={100} alt="" className="" />
          <p className="text-xl font-bold leading-[1.5]">
            Вітаю! Ти заповнив заяву на вступ до Профспілки. Ми майже разом! Цю заяву ти маєш
            віднести своєму керівнику, який допоможе відправити її за шаблоном внутрішніх відправок
            Голові твого осередку Профспілки. Вітаємо в родині профспілчан!
          </p>
          <Image
            src={Man}
            width={292}
            height={460}
            alt=""
            className="absolute -bottom-[112px] right-0"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepSeven;
