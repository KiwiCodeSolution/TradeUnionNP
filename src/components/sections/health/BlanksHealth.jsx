import { useTranslations } from "next-intl";
import FileButton from "@/components/UI/buttons/FileButton";
import RedDot from "@/components/UI/RedDot";
import Title from "@/components/Title";

const BlanksHealth = ({ documents, name }) => {
  const t = useTranslations("Health");
  return (
    <ul className="w-full flex flex-col gap-y-6 mx-auto">
      {documents.map(el => (
        <li
          key={el.title}
          className="w-full rounded-[20px] bg-[#F4F4F4] flex gap-x-11 pt-6 px-[38px] pb-[30px]"
        >
          <div className="w-2/5 flex flex-col">
            <Title tag={"h4"} styles={"mb-[15px]"}>
              {el.title}
            </Title>
            <p className="text-red text-[22px] font-extrabold">{el.text}</p>
            <FileButton link={el.file} name={name} />
          </div>
          <ul className="w-3/5">
            <li>
              <h4 className="text-lg font-bold mb-2.5">{t(`section`)}:</h4>
            </li>
            {el.points.map(point => (
              <li className="w-full flex items-center gap-x-4" key={point}>
                <RedDot />
                <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{point}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default BlanksHealth;
