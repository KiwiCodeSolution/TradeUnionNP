import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const Honors = () => {
  return (
    <BaseSection style={"mt-16 "}>
      <Wrapper styles={"honors"}>
        <div className="flex flex-col justify-center items-center py-12 px-8 md:px-36 relative text-center">
          <p className="text-[40px]">
            За версією ГО Трудові ініціативи Колективний договір ВПСП ТОВ “НОВА ПОШТА” визнано як
          </p>
          <p className="text-[40px] font-bold">
            "Кращий Колективний договір серед профспілок країни”.
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Honors;
