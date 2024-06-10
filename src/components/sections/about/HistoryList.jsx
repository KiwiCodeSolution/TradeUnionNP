import data from "@/constants/history.json";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  const length = data.length - 1;
  return (
    <ul className="mt-16 flex flex-col gap-y-12">
      {data.map((el, index) => (
        <HistoryItem key={el.year} last={index === length} item={el} />
      ))}
    </ul>
  );
};

export default HistoryList;
