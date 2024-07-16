import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Heart from "@/images/recreations/heart.svg";
import Party from "@/images/recreations/party.svg";
import Hero from "@/images/recreations/hero_image.svg";
import { inter } from "@/app/[locale]/fonts";

const HeroRecreationPage = () => {
  return (
    <BaseSection>
      <Wrapper>
        <PathPage endPath={"Дозвілля та спорт"} />
        <div className="w-full flex flex-col md:flex-row mt-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col">
            <Title tag={"h1"} styles={"text-center md:text-left"}>
              <span className="text-red">Дозвілля</span> та спорт
            </Title>
            <p className="text-lg text-grey my-8 text-center md:text-left">
              Профспілка{" "}
              <strong className="text-bgBlack">створює умови для організованого дозвілля</strong> та
              змістовного відпочинку профспілчан.
            </p>
            <div className="w-full md:w-3/4 flex items-start md:items-center gap-x-4 mb-4">
              <Image
                src={Heart}
                width={49}
                height={50}
                alt="зображення серця, червоний контур на білому фоні"
              />
              <p className="text-lg text-grey">
                <strong className="text-bgBlack">Просуваємо ідеї здорового способу життя</strong>,
                розвиток фізичної культури та спорту.
              </p>
            </div>
            <div className="w-full md:w-3/4 flex items-start md:items-center gap-x-4">
              <Image src={Party} width={50} height={43} alt="зображення паперового феєрверку" />
              <p className="text-lg text-grey">
                <strong className="text-bgBlack">Організовуємо масові культурні заходи</strong>{" "}
                (концерти, екскурсії, дитячі заходи), а також спортивні змагання та ігри
                (офлайн/онлайн).
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative z-0 bg-white rounded-2xl px-8 py-4 flex items-center gap-4 w-full sm:w-96 mt-8 mx-auto">
              <p
                className={`${inter.className} text-red text-lg font-bold flex flex-col md:flex-row gap-x-2 text-center`}
              >
                понад <span className="text-[34px]">2550</span>
              </p>
              <p className="text-base text-grey">Культурно-масових заходів</p>
            </div>
            <Image
              src={Hero}
              width={592}
              height={508}
              alt="малюнок трьох людей у спортивних футболках та шортах, кожен тримає по одному спортивному знаряддю: футбольний м'яч, тенісну ракетку, шар для боулінгу"
              className="-mt-5 relative z-[1]"
            />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroRecreationPage;
