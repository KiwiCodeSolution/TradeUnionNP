import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/protection/protection_hero.svg";
import Hand from "@/images/hand.svg";
import { inter } from "@/app/fonts";
import Title from "@/components/Title";

const ProtectionHero = () => {
  return (
    <BaseSection>
      <Wrapper>
        <PathPage endPath={"Захист трудових прав"} />
        <div className="w-full flex">
          <div className="w-2/5 flex flex-col gap-y-4 pt-16">
            <Title tag="h1">
              <span className="text-red">Захист</span> трудових прав
            </Title>
            <p className="text-lg">
              <strong>Головне і пріоритетне право Профспілки </strong>— представляти і захищати
              трудові та соціально-економічні права та інтереси профспілчан.
            </p>
          </div>
          <Image
            src={HeroImage}
            width={642}
            height={485}
            alt="малюнок двох чоловіків"
            className="w-3/5"
          />
        </div>
        <div className="w-full bg-white rounded-t-lg border-b-4 border-red flex gap-x-8 p-6 md:p-12  relative">
          <div className="w-1/3 md:w-1/4 ">
            <Image
              src={Hand}
              width={211}
              height={235}
              alt="малюнок руки"
              className="absolute bottom-12 left-12 z-[2]"
            />
          </div>

          <div className="flex flex-col justify-center w-1/3 md:w-1/4">
            <div className="flex items-center gap-x-6">
              <p className={`${inter.className} text-red text-2xl font-bold`}>понад</p>
              <p className={`${inter.className} text-red text-[50px] font-bold`}>5000</p>
            </div>

            <p className="text-lg text-grey">Звернень на правовий захист опрацьовано</p>
          </div>
          <p className="w-1/3 md:w-2/4 text-lg text-grey">
            Особливість правозахисної профспілкової функції в тому, що{" "}
            <strong>
              працівники самостійно та на добровільних засадах об’єдналися для захисту своїх прав
            </strong>{" "}
            , свобод та інтересів. Правозахисна діяльність здійснюється в межах наданих прав та
            обов’язків.
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionHero;
