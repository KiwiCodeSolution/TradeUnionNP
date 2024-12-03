import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import HealthImage from "@/images/health/health_hero.png";
import Image from "next/image";

const HealthHero = () => {
  return (
    <section className="w-full relative">
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={"Оздоровлення"} />
        <div className="flex flex-col md:flex-row gap-[60px]">
          <div className="flex flex-col w-full sm:w-3/5 lg:w-2/5 text-xl-1 text-black-100 text-left xs:text-center md:text-left">
            <Title tag="h1" styles="mt-8 md:mt-20 md:mb-10 text-red">
              Оздоровлення
            </Title>
            <div className="flex flex-col gap-y-6 pb-6">
              <p className="text-lg">
                Путівки на оздоровлення
                <strong> в літній та зимовий періоди</strong>
              </p>

              <p className="text-lg">
                Виплати матеріальної допомоги на оздоровлення
                <strong> учасникам бойових дій</strong> з нагоди Дня захисника та захисниць України
                і на реабілітацію після отримання поранення при участі у бойових діях
              </p>

              <p className="text-lg">
                Матеріальна допомога
                <strong>на оздоровлення та відпочинок</strong> дітей членів Профспілки
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/5 md:w-3/5 md:my-auto ">
            <Image
              src={HealthImage}
              width={825}
              height={520}
              alt="Зображення Дівчини у капелюсі, що тримає на руках хлопчика, та квитки."
              className="-bottom-8 right-32 absolute z-[2]"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HealthHero;
