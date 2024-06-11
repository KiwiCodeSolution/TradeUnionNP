import Image from "next/image";
import Mail from "@/images/contacts/mail.svg";

const Manager = ({ item }) => {
  return (
    <article className="w-full flex flex-col gap-4 text-grey text-lg">
      <h3 className="font-bold text-[30px]">{item.name}</h3>
      <div className="flex items-center gap-x-3">
        <Image src={Mail} width={21} height={27} alt="малюнок конверту червоного кольору" />
        <a href={`mailto:${item.mail}`} className="text-red">
          {item.mail}
        </a>
      </div>
      <p>{item.position}</p>
      <p>{item.details}</p>
    </article>
  );
};

export default Manager;
