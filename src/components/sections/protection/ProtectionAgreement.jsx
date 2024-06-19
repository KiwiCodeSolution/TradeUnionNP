import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Agreement from "@/images/protection/protection_agreement.svg";
import Arrow from "@/images/arrow_white.svg";
import Title from "@/components/Title";

const ProtectionAgreement = () => {
  return (
    <BaseSection style={"bg-white"}>
      <Wrapper styles={"flex items-center"}>
        <Image
          src={Agreement}
          width={600}
          height={502}
          alt="зображення договору та рук, що тримають кулькову ручку"
          className="w-1/2"
        />
        <div className="w-1/2 flex flex-col gap-y-4">
          <Title tag="h2">
            Колективний <span className="text-red">договір</span>
          </Title>

          <p className="text-[15px]">
            Колективний договір — договір між Адміністрацією ТОВ “Нова Пошта” та Профспілкою ТОВ
            “Нова Пошта” (ВПСП ТОВ НОВА ПОШТА), що представляє трудовий колектив. Колдоговір
            визначає взаємні виробничі, трудові і соціально-економічні відносини між двома
            сторонами. Положення Колективного договору розповсюджуються на всіх працівників і є
            обов'язковими до виконання.
          </p>
          <a
            href="/files/statut.pdf"
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between"
          >
            переглянути
            <Image src={Arrow} width={30} height={30} alt="іконка червоної стрілочки вправо" />
          </a>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionAgreement;
