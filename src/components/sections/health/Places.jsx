import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import PlacesSlider from "./PlacesSlider";
import AboutVoucher from "./AboutVoucher";
import ParticipationRules from "./ParticipationRules";
import places from "@/data/places.json";
import Place from "./Place";
import Image from "next/image";
import HandIconSwipe from "@/images/health/hugeicons_swipe.png";

const Places = () => {
  return (
    <BaseSection style={""}>
      <div className="w-full h-[3000px] xl:h-[1560px] bg-health-gradient-2 absolute top-[380px] left-0 z-0" />
      <Wrapper styles={"z-[2] relative"}>
        <Title tag={"h2"} styles={"mb-8"}>
          <span className="text-red">Пансіонати</span>, які обрано для путівок
        </Title>
        <p className="text-lg text-grey">
          Кожен пансіонат оцінюють профспілчани за спеціально розробленою системою від 1 до 5 балів.{" "}
          <br />
          <strong>Від 4,3 до 5 балів</strong> — так наші працівники оцінили пансіонати, у яких
          відпочивали.
        </p>
        <PlacesSlider places={places} />
        <Image
          src={HandIconSwipe}
          width={48}
          height={48}
          alt="малюночок долоні із стрілочкою вліво, вказує напрямок гортання галереї"
          className="md:hidden ml-auto mb-4 mt-1"
        />
        <AboutVoucher />
        <ParticipationRules />
        <Title tag={"h2"} styles={"mt-14 mb-10"}>
          А що робити, якщо не виграв путівку? Профспілка надає{" "}
          <span className="text-red">пільгові умови у придбанні</span> путівки у партнерські
          пансіонати! 
        </Title>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 pb-8 gap-y-6">
          <Place place={places.find(el => el.name === "Садиба “Черсак”")} />
          <Place place={places.find(el => el.name === "Готельний комплекс “Небокрай”")} />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Places;
