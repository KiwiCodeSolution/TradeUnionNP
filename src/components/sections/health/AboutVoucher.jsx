import Image from "next/image";
import Ticket from "@/images/health/ticket.png";
import TicketMob from "@/images/health/ticket_mob.png";
import Stars from "@/images/health/stars_card.png";
import { useTranslations } from "next-intl";
import { inter } from "@/app/[locale]/(client)/fonts";

const AboutVoucher = () => {
  const t = useTranslations("Health");
  return (
    <div className="w-full h-[420px] md:h-[650px] xl:h-[332px] relative py-5 px-6 md:pt-[60px] md:pl-[46px] md:pr-[38px] xl:pt-[85px] xl:pl-[6px]">
      <p
        className={`${inter.className} w-full text-[17px] md:text-2xl xl:hidden z-[2] relative leading-[1.2]`}
      >
        {t("about_voucher.0")}
      </p>
      <p
        className={`${inter.className} hidden xl:block w-full text-[17px] xl:w-2/3 xl:text-2xl xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:left-16 z-[2] relative leading-[1.2]`}
      >
        {t("about_voucher.1")} <br />
        {t("about_voucher.2")}
      </p>

      <Image
        src={TicketMob}
        width={300}
        height={400}
        alt="Зображення квитка чи білета"
        className="w-full h-[400px] md:h-[644px] absolute top-0 left-0 xl:hidden"
      />
      <Image
        src={Ticket}
        width={1160}
        height={362}
        alt="Зображення квитка чи білета"
        className="hidden xl:block xl:rotate-0 w-full mx-auto absolute top-0 left-0"
      />

      <Image
        src={Stars}
        width={200}
        height={200}
        alt="три прозорі зірочки з червоним контуром, розташовані півколом, середня зірочка вище та більше інших"
        className="w-[200px] md:w-[340px] xl:w-[200px] absolute top-[322px] right-1/2 translate-x-1/2 md:top-[515px] xl:top-1/2 -translate-y-1/2 xl:right-12 xl:translate-x-0 xl:-rotate-90"
      />
    </div>
  );
};

export default AboutVoucher;
