import Image from "next/image";
import Mountains from "@/images/health/mountains.png";
import Deckchair from "@/images/health/deckchair.png";
import Locale from "@/images/health/locale.png";
import RatingComponent from "./Rating";

const Place = ({ place }) => {
  return (
    <article className="w-full xl:w-[560px] min-h-[405px] md:min-h-[450px] bg-white shadow-lg rounded-xl pt-[30px] pb-[74px] xl:py-7 px-[14px] xl:px-8 flex flex-col gap-y-4 relative mx-auto  overflow-hidden">
      <p className="w-full xl:w-[calc(100%-190px)] text-[25px] xl:text-[30.3px] font-bold leading-[33.33px] relative z-[1]">
        {place.name}
      </p>
      <RatingComponent
        styles={"absolute bottom-6 left-2 xl:top-8 xl:bottom-0 xl:left-[335px] items-end z-[2]"}
        rating={place.rating}
      />
      <div className="flex items-center gap-x-3">
        <Image src={Locale} width={27} height={27} className="" alt="зображення точки навігації" />
        <p className="text-[17px] xl:text-lg text-grey leading-6">{place.address}</p>
      </div>
      <p className="text-[17px] xl:text-xl text-grey relative z-[1]">{place.description}</p>

      <Image
        src={place.type === "mountains" ? Mountains : Deckchair}
        width={358}
        height={303}
        className="absolute bottom-0 -right-[36px] md:right-0 z-[0]"
        alt={place.type === "mountains" ? "зображення гір" : "зображення шезлонгу"}
      />
    </article>
  );
};

export default Place;
