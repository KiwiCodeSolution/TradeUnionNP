import { useTranslations } from "next-intl";
import data from "@/data/history.json";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  const t = useTranslations("About.history");

  const length = data.length - 1;
  return (
    <ul className="mt-16 flex flex-col gap-y-12">
      {data.map((el, index) => (
        <HistoryItem key={el.year} last={index === length} item={el} index={index} />
      ))}
    </ul>
  );
};

export default HistoryList;
