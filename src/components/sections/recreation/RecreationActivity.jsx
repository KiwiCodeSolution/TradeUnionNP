import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ActivityImage from "@/images/recreations/activity.svg";
import activity from "@/data/activity.json";

const RecreationActivity = () => {
  return (
    <BaseSection style={"bg-white pt-32"}>
      <div className="absolute h-52 left-0 right-0 bg-gradient-to-b from-bgGrey to-white z-0 top-0" />
      <Wrapper styles={"flex flex-col md:flex-row items-end pt-20 relative"}>
        <Image
          src={ActivityImage}
          width={240}
          height={378}
          className="w-full md:w-1/5 order-2 md:order-1"
          alt="малюнок чоловіка у червоному плащі"
        />
        <div className="w-full md:w-4/5 grid-cols-2 grid md:grid-cols-3 gap-x-10 gap-y-5">
          {activity.map(el => (
            <article
              className="relative w-full mx-auto flex flex-col items-center pb-16"
              key={el.title}
            >
              <div className="relative w-full flex flex-col items-center">
                <Image
                  src={el.image}
                  width={85}
                  height={85}
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 z-0"
                />
                <div className="bg-gradient-to-b from-transparent to-white absolute top-0 bottom-0 right-0 left-0 z-10" />
                <p className="text-red text-[30px] md:text-[50px] font-bold text-center leading-[42px] z-[20]">
                  {el.quantity}
                </p>
              </div>

              <p className="w-32 sm:w-64 text-grey text-lg text-center">{el.title}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default RecreationActivity;
