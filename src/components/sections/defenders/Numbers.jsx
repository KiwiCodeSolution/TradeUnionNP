import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import NumbersListValues from "./NumbersListValues";

const Numbers = () => {
  const t = useTranslations("Defenders");
  const numbersValues = [
    { id: 1, end: 10505354, start: 0, label: t("numbers.0") },
    { id: 2, end: 1150, start: 0, label: t("numbers.1") },
    { id: 3, end: 5, start: 0, label: t("numbers.2") },
    { id: 4, end: 2902457, start: 0, label: t("numbers.3") },
    { id: 5, end: 5578207, start: 0, label: t("numbers.4") },
  ];

  return (
    <BaseSection>
      <div className="w-full xl:w-[1280px] mx-auto py-10 px-4 md:px-14 md:py-8">
        <NumbersListValues values={numbersValues} />
      </div>
    </BaseSection>
  );
};
export default Numbers;
