import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Image from "next/image";
import Phone from "@/images/contacts/phone.svg";
import Mail from "@/images/contacts/mail.svg";

const Office = ({ office }) => {
  const phoneNumber = formatPhoneNumber(office.phone);
  return (
    <article className="w-full bg-white p-8 rounded-2xl flex flex-col gap-4 justify-between text-[15px]">
      <h4 className="text-xl font-bold leading-[1.3]">{office.region}</h4>
      <p className="">
        Голова: <span className="text-grey">{office.director || "вакансія"}</span>
      </p>
      <a
        href={`mailto:${office.email}`}
        className="flex gap-x-3 items-center text-red hover:underline hover:underline-offset-1"
      >
        <Image src={Mail} width={21} height={21} alt="червоний конверт" />
        {office.email}
      </a>
      <a
        href={`tel:${office.phone}`}
        className="flex gap-x-3 items-center text-grey hover:text-red"
      >
        <Image src={Phone} width={21} height={21} alt="червона телефонна трубка" />
        {phoneNumber}
      </a>
    </article>
  );
};

export default Office;
