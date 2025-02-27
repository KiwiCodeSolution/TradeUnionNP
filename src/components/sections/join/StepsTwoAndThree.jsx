import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/join/arrow.png";
import ArrowRight from "@/images/join/arrow_right.png";
import Screen from "@/images/join/screen_1.png";
import ScreenMob from "@/images/join/screen_1_mob.png";

const StepsTwoAndThree = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative"}>
        <Image
          src={Arrow}
          width={150}
          height={150}
          alt=""
          className="w-[44px] h-[44px] md:w-[92px] md:h-[92px] xl:w-[150px] xl:h-[150px] absolute top-[315px] md:top-[77px] xl:top-[130px] left-[50px] z-[1]"
        />
        <Image
          src={Arrow}
          width={224}
          height={192}
          alt=""
          className="w-[80px] h-[80px] md:w-[132px] md:h-[132px] xl:w-[224px] xl:h-[192px] absolute top-[350px] md:top-[202px] xl:top-[130px] right-[50px] z-[1]"
        />
        <div className="bg-white my-10 rounded-20 relative py-6 pl-6 pr-[2px] md:pt-6 md:px-6 shadow-joinSections xl:py-6 xl:px-16">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">Крок 2. </span>
            Роздрукуй обрану заяву та заповни її. Як правильно заповнити — пояснюємо далі.
          </Title>
        </div>
        <div className="bg-white flex flex-col rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center mb-8"}>
            <span className="text-red">Крок 3. </span>
            Заповнення бланків.
          </Title>
          <p className="text-[17px] md:text-lg mb-6">
            У <span className="text-red">правому верхньому куті</span> заповни дані про себе:
            область, у якій працюєш, своє прізвище, ім’я, по батькові українською мовою в родовому
            відмінку, вкажи свій реєстраційний номер облікової картки платників податків (ти знаєш
            його як ІПН чи ідентифікаційний номер), а також контактний номер телефону, на якому
            відкрито Вайбер або Телеграм.
          </p>
          <div className="w-[640px] mx-auto relative hidden md:block">
            <div className="w-full xl:w-[960px] h-[70px] xl:flex items-center justify-center absolute top-[36px] left-[-2px] xl:left-[110px] xl:top-[300px]">
              <Image
                src={ArrowRight}
                width={72}
                height={69}
                alt=""
                className="w-12 h-12 xl:w-[72px] xl:h-[69px] absolute top-0 left-0"
              />
              <p className="text-red text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
                Область, у якій працюєте
              </p>
            </div>
            <div className="w-full xl:w-[960px] h-[70px] xl:flex items-center justify-center absolute top-[189px] left-[-2px] xl:left-[110px] xl:top-[482px]">
              <Image
                src={ArrowRight}
                width={72}
                height={69}
                alt=""
                className="w-12 h-12 xl:w-[72px] xl:h-[69px] absolute top-0 left-0"
              />
              <p className="text-red text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
                Прізвище, імʼя, по батькові
              </p>
            </div>
            <div className="w-full xl:w-[960px] h-[70px] xl:flex items-center justify-center absolute top-[338px] left-[-2px] xl:left-[110px] xl:top-[755px]">
              <Image
                src={ArrowRight}
                width={72}
                height={69}
                alt=""
                className="w-12 h-12 xl:w-[72px] xl:h-[69px] absolute top-0 left-0"
              />
              <p className="text-red text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
                ХХХХХХХХХХ
              </p>
            </div>
            <div className="w-full xl:w-[960px] h-[70px] xl:flex items-center justify-center absolute top-[422px] left-[-2px] xl:left-[110px] xl:top-[882px]">
              <Image
                src={ArrowRight}
                width={72}
                height={69}
                alt=""
                className="w-12 h-12 xl:w-[72px] xl:h-[69px] absolute top-0 left-0"
              />
              <p className="text-red text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
                +380 ХХХ ХХ ХХ ХХ
              </p>
            </div>
            <Image src={Screen} width={960} height={725} alt="" className="" />
          </div>

          <Image src={ScreenMob} width={260} height={350} alt="" className="md:hidden mx-auto" />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepsTwoAndThree;
