import Image from "next/image";
import Ticket from "@/images/health/ticket.png";
import Stars from "@/images/health/stars_card.png";

import { inter } from "@/app/[locale]/(client)/fonts";

const AboutVoucher = () => {
  return (
    <div className="w-full relative">
      <p className={`${inter.className} w-2/3 text-2xl absolute top-1/2 -translate-y-1/2 left-16`}>
        Путівка передбачає проживання двох осіб у номері категорії “стандарт” та триразове
        харчування протягом 7 днів. <br />
        Профспілка сплачує 80% вартості путівки, а профспілчанину потрібно сплатити 20% від вартості
        путівки, проїзд в обидві сторони, особисті витрати.
      </p>
      <Image
        src={Ticket}
        width={1160}
        height={362}
        alt="Зображення квитка чи білета"
        className="w-full mx-auto"
      />

      <Image
        src={Stars}
        width={200}
        height={200}
        alt="три прохорі зірочки з червоним контуром, розташовані півколом, середня зірочка вище та більше інших"
        className="absolute top-1/2 -translate-y-1/2 right-12 -rotate-90"
      />
    </div>
  );
};

export default AboutVoucher;
