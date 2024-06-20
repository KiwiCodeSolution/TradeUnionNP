import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Calendar from "@/images/aid/dopomoga-2.svg";
import Alarm from "@/images/aid/icon-alarm.svg";
import Title from "@/components/Title";

const Limitation = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <div className="absolute h-52 left-0 right-0 bg-gradient-to-t from-bgGrey to-white z-0 top-0" />
      <Wrapper styles={"flex pt-16"}>
        <div className="w-1/2 flex flex-col gap-y-8 pt-16 relative">
          <Title tag={"h2"}>
            Які <span className="text-red">часові обмеження</span> для отримання допомоги
          </Title>
          <ul className="flex flex-col gap-y-8">
            <li className="flex flex-col gap-y-16">
              <div className="flex items-center gap-x-4">
                <Image src={Alarm} width={32} height={39} alt="червоний годинник" />
                <p className="text-[30px] font-bold">2 рази на рік</p>
              </div>
              <p className="text-lg text-grey">
                Матеріальна допомога надається члену Профспілки{" "}
                <strong>не частіше двох разів на рік.</strong> У виключних випадках (надзвичайна
                подія, тяжке захворювання, одночасне співпадіння декількох подій) матеріальна
                допомога може бути надана додатково за поданням профкому ППО (первинної
                профспілкової організації) та погодженням ЦК.
              </p>
            </li>
            <li className="flex flex-col gap-y-16">
              <div className="flex items-center gap-x-4">
                <Image src={Alarm} width={32} height={39} alt="червоний годинник" />
                <p className="text-[30px] font-bold">2 місяці</p>
              </div>
              <p className="text-lg text-grey">
                Повний пакет документів для отримання матеріальної допомоги приймаються в строк не
                пізніше 2 місяців з дати настання події (випадку).
              </p>
            </li>
          </ul>
        </div>
        <Image src={Calendar} width={592} height={518} className="w-1/2 relative" />
      </Wrapper>
    </BaseSection>
  );
};

export default Limitation;
