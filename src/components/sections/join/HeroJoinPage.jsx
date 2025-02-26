import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/join/hero.png";

const HeroJoinPage = () => {
  return (
    <section className="w-full relative min-h-[700px] bg-bgGrey">
      <Wrapper styles="flex flex-col">
        <PathPage endPath={"Як вступити?"} />
        <div className="w-full flex items-start relative">
          <div className="w-full xl:w-1/2 flex flex-col gap-y-6">
            <Title tag="h1" styles="">
              <span className="text-red">Привіт!</span> Раді, що вирішили долучитися до{" "}
              <span className="text-red">нашої команди!</span>
            </Title>
            <p className="w-2/3">
              Тут ви знайдете зручний та покроковий гід заповнення заяви, щоб долучитися до команди
              профспілкової групи компаній «NOVA».
            </p>
          </div>
          <Image
            src={HeroImage}
            width={824}
            height={824}
            alt=""
            className="absolute top-[-168px] right-[-16px]"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroJoinPage;
