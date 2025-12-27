import { useTranslations } from "next-intl";
import Value from "./Value";

const NumbersListValues = ({ values }) => {
  const t = useTranslations("Defenders");
  return (
    <div className="w-full xl:w-[896px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
      {values.map((v, index) => (
        <div key={index} className={`w-full ${index === 0 ? "md:col-span-2" : ""} `}>
          <Value item={v} index={index} currency={t("currency")} />
        </div>
      ))}
    </div>
  );
};
export default NumbersListValues;
