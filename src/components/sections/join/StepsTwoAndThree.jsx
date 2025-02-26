import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/join/arrow.png";
import ArrowRight from "@/images/join/arrow_right.png";
import Screen from "@/images/join/screen_1.png";

const StepsTwoAndThree = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative"}>
        <Image
          src={Arrow}
          width={150}
          height={150}
          alt=""
          className="absolute top-[130px] left-[50px] z-[1]"
        />
        <Image
          src={Arrow}
          width={150}
          height={150}
          alt=""
          className="absolute top-[130px] right-[50px] z-[1]"
        />
        <div className="bg-white my-10 rounded-20 relative py-6 px-16 shadow-joinSections">
          <Title tag={"h1"} styles={"text-center"}>
            <span className="text-red">Крок 2. </span>
            Роздрукуй обрану заяву та заповни її. Як правильно заповнити — пояснюємо далі.
          </Title>
        </div>
        <div className="bg-white flex flex-col rounded-20 relative py-6 px-[102px] shadow-joinSections">
          <div className="w-[960px] h-[70px] flex items-center justify-center absolute left-[110px] top-[300px]">
            <Image
              src={ArrowRight}
              width={72}
              height={69}
              alt=""
              className="absolute top-0 left-0"
            />
            <p className="text-red text-4xl leading-[1.21] font-extrabold text-center">
              Область, у якій працюєте
            </p>
          </div>
          <div className="w-[960px] h-[70px] flex items-center justify-center absolute left-[110px] top-[482px]">
            <Image
              src={ArrowRight}
              width={72}
              height={69}
              alt=""
              className="absolute top-0 left-0"
            />
            <p className="text-red text-4xl leading-[1.21] font-extrabold text-center">
              Прізвище, імʼя, по батькові
            </p>
          </div>
          <div className="w-[960px] h-[70px] flex items-center justify-center absolute left-[110px] top-[755px]">
            <Image
              src={ArrowRight}
              width={72}
              height={69}
              alt=""
              className="absolute top-0 left-0"
            />
            <p className="text-red text-4xl leading-[1.21] font-extrabold text-center">
              ХХХХХХХХХХ
            </p>
          </div>
          <div className="w-[960px] h-[70px] flex items-center justify-center absolute left-[110px] top-[882px]">
            <Image
              src={ArrowRight}
              width={72}
              height={69}
              alt=""
              className="absolute top-0 left-0"
            />
            <p className="text-red text-4xl leading-[1.21] font-extrabold text-center">
              +380 ХХХ ХХ ХХ ХХ
            </p>
          </div>

          <Title tag={"h1"} styles={"text-center mb-8"}>
            <span className="text-red">Крок 3. </span>
            Заповнення бланків.
          </Title>
          <p className="text-lg mb-6">
            У <span className="text-red">правому верхньому куті</span> заповни дані про себе:
            область, у якій працюєш, своє прізвище, ім’я, по батькові українською мовою в родовому
            відмінку, вкажи свій реєстраційний номер облікової картки платників податків (ти знаєш
            його як ІПН чи ідентифікаційний номер), а також контактний номер телефону, на якому
            відкрито Вайбер або Телеграм.
          </p>
          <Image src={Screen} width={960} height={725} alt="" className="" />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepsTwoAndThree;
