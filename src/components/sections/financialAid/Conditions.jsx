import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Clock from "@/images/clock.svg";
import Clock_1 from "@/images/clock1.svg";
import Cash from "@/images/aid/dopomoga-1.svg";
import Title from "@/components/Title";

const Conditions = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row items-center">
          <Image
            src={Cash}
            width={480}
            height={480}
            alt="малюнок руки що тримає гроші"
            className="w-full md:w-2/5"
          />
          <div className="w-full md:w-3/5 flex flex-col gap-y-8">
            <Title tag={"h2"}>
              <span className="text-red">Умови</span> надання матеріальної допомоги
            </Title>
            <p className="text-lg">
              Підставою для надання матеріальної допомоги є заява члена Профспілки, його родича* або
              голови первинної профспілкової організації із зазначенням фактичних обставин, у
              зв’язку з якими надається матеріальна допомога{" "}
              <strong>та повний пакет відповідних підтверджуючих документів.</strong>
            </p>
          </div>
        </div>
        <div className="w-full pt-16 md:pt-0">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red"> Скільки потрібно бути членом Профспілки</span> <br /> та
            сплачувати внески для отримання допомоги
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="px-8 md:px-16 py-10 bg-white rounded-2xl w-full sm:w-1/2 flex flex-col gap-4 relative box-clock-shadow">
              <h3 className="text-2xl font-bold text-red">6 місяців</h3>
              <p className="text-lg">
                Матеріальна допомога надається працівникам,{" "}
                <strong>які є членами Профспілки</strong> (перебувають на обліку) та щомісячно
                сплачують членські внески більше 6 (шести) календарних місяців.
              </p>
              <Image
                src={Clock}
                width={248}
                height={238}
                alt="годинник"
                className="h-1/3 md:h-2/3 opacity-10 absolute right-2 top-7 md:bottom-5"
              />
            </div>
            <div className="px-8 md:px-16 py-10 bg-white rounded-2xl w-full sm:w-1/2 flex flex-col gap-4 relative box-clock-shadow">
              <h3 className="text-2xl font-bold text-red">12 місяців</h3>
              <p className="text-lg">
                <strong>Компенсація витрат на лікування у випадку хвороби близьких родичів</strong>{" "}
                члена Профспілки надається працівникам, які є членами Всеукраїнської професійної
                спілки працівників ТОВ «НОВА ПОШТА» (перебувають на обліку) більше 12 (дванадцяти)
                календарних місяців.
              </p>
              <Image
                src={Clock_1}
                width={202}
                height={194}
                alt="пісочний годинник"
                className="h-1/3 md:h-2/3 opacity-10 absolute right-2 top-7 md:bottom-5"
              />
            </div>
          </div>
          <p className="text-lg text-center mt-8">
            * — Близькими родичами члена Профспілки є: батьки, дружина, чоловік, діти. <br />
            Офіційне та документальне <strong>підтвердження спорідненості обов'язково!</strong>
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Conditions;
