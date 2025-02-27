import Image from "next/image";
import Awis_1 from "@/images/join/awis_1.png";
import Awis_2 from "@/images/join/awis_2.png";
import Awis_3 from "@/images/join/awis_3.png";
import Awis_4 from "@/images/join/awis_4.png";
import Awis_5 from "@/images/join/awis_5.png";
import ArrowRight from "@/images/join/arrow_right.png";

const ModalAwis = () => {
  return (
    <section className="w-full max-h-[90vh] overflow-auto flex flex-col">
      <div className="w-full relative flex flex-col">
        <Image
          src={ArrowRight}
          width={69}
          height={53}
          alt=""
          className="w-10 h-10 xl:w-[69px] xl:h-[53px] absolute top-[30px] left-[-6px] xl: xl:left-[230px]"
        />
        <div className="w-[90%] xl:w-[805px] p-2.5 bg-bgGrey rounded-xl mb-[14px] mx-auto">
          <p className="text-lg xl:text-xl leading-[1.4] font-bold text-center max-w-[805px]">
            Крок 1. Якщо у вас програмне забезпечення версії “Авіс”, натисніть у меню “документи”.
          </p>
        </div>
        <Image src={Awis_1} width={920} height={85} alt="" className="mx-auto" />
      </div>
      <div className="w-full relative flex flex-col">
        <Image
          src={ArrowRight}
          width={72}
          height={50}
          alt=""
          className="w-10 h-10 xl:w-[72px] xl:h-[50px] absolute top-[75px] xl:top-[35px] left-[90px] xl:left-[350px] rotate-90"
        />
        <Image
          src={ArrowRight}
          width={72}
          height={50}
          alt=""
          className="w-10 h-10 xl:w-[72px] xl:h-[50px] absolute bottom-[40px] xl:bottom-[65px] right-[85px] xl:right-[460px] rotate-90"
        />
        <Image
          src={ArrowRight}
          width={66}
          height={57}
          alt=""
          className="w-10 h-10 xl:w-[66px] xl:h-[57px] absolute bottom-[0px] right-[60px] xl:right-[330px] rotate-45"
        />
        <div className="w-[90%] xl:w-[805px] p-2.5 bg-bgGrey rounded-xl my-[14px] mx-auto">
          <p className="text-lg xl:text-xl leading-[1.4] font-bold text-center max-w-[805px]">
            Крок 2. Оберіть “експрес накладна”
          </p>
        </div>
        <Image src={Awis_2} width={920} height={386} alt="" className="mx-auto" />
      </div>
      <div className="w-full relative flex flex-col">
        <div className="w-[90%] xl:w-[805px] p-2.5 bg-bgGrey rounded-xl my-[14px] mx-auto">
          <p className="text-lg xl:text-xl leading-[1.4] font-bold text-center max-w-full xl:w-[805px]">
            Крок 3. У відкритому вікні експрес накладної натисніть “СТВОРИТИ” – “ВНУТРІШНЄ
            ВІДПРАВЛЕННЯ”
          </p>
        </div>
        <Image src={Awis_3} width={920} height={89} alt="" className="mx-auto" />
      </div>
      <div className="w-full relative flex flex-col mt-[14px]">
        <Image src={Awis_4} width={920} height={90} alt="" className="mx-auto" />
      </div>
      <div className="w-full relative flex flex-col">
        <div className="w-[90%] xl:w-[805px] p-2.5 bg-bgGrey rounded-xl my-[14px] mx-auto">
          <p className="text-lg xl:text-xl leading-[1.4] font-bold text-center max-w-[805px]">
            Крок 4. Натисніть папку “Профспілка” і серед шаблонів виберіть потрібний варіант.
            Оберіть шаблон “Документи в ___ППО”. Зверніть увагу, що у кожного ППО назва і отримувач
            будуть різні, це залежить від регіону, в якому Ви працюєте. Тобто, якщо Ви у Львові,
            шаблон буде мати назву “Документи в Львівську ППО” – Полешко Ігор тощо.
          </p>
        </div>
        <Image src={Awis_5} width={920} height={312} alt="" className="mx-auto mb-5" />
      </div>
    </section>
  );
};

export default ModalAwis;
