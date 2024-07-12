import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Image from "next/image";
import Post from "@/images/contacts/mail.svg";
import Tell from "@/images/contacts/phone.svg";

const TelMailBlock = ({ phone, email }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-2 items-center mx-auto md:ml-0">
        <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
        <a href={`tel:${phone}`} className="text-[15px] hover:text-red">
          {formatPhoneNumber(phone)}
        </a>
      </div>
      <div className="flex gap-x-2 items-center mx-auto md:ml-0">
        <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
        <a href={`mailto:${email}`} className="text-[15px] hover:text-red">
          {email}
        </a>
      </div>
    </div>
  );
};

export default TelMailBlock;
