import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/join/hero.png";
import HeroImageMobTab from "@/images/join/hero_mob.png";

const HeroJoinPage = () => {
  return (
    <section className="w-full relative h-[755px] md:h-[830px] xl:min-h-[700px] bg-bgGrey">
      <Wrapper styles="flex flex-col">
        <PathPage endPath={"Як вступити?"} />
        <div className="w-full flex items-start relative">
          <div className="w-full xl:w-1/2 flex flex-col gap-y-2 xl:gap-y-6">
            <Title tag="h1" styles="">
              <span className="text-red">Привіт!</span> Раді, що вирішили долучитися до{" "}
              <span className="text-red">нашої команди!</span>
            </Title>
            <p className="w-full xl:w-2/3">
              Тут ви знайдете зручний та покроковий гід заповнення заяви, щоб долучитися до команди
              профспілкової групи компаній «NOVA».
            </p>
          </div>
          <Image
            src={HeroImage}
            width={824}
            height={824}
            alt=""
            className="hidden xl:inline-block absolute top-[-168px] right-[-16px]"
          />
        </div>
        <Image
          src={HeroImageMobTab}
          width={260}
          height={389}
          alt=""
          className="md:w-[344px] xl:h-[520px] xl:hidden absolute bottom-[0px] left-1/2 -translate-x-1/2"
        />
      </Wrapper>
    </section>
  );
};

export default HeroJoinPage;
