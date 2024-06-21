import RedDot from "../RedDot";

const ListItem = ({ item, gap }) => {
  return (
    <li className={`w-full text-lg text-grey flex gap-x-${gap} items-center`}>
      <RedDot />
      <p className={`w-[calc(100%-9px-${gap * 4}px)]`}>{item}</p>
    </li>
  );
};

export default ListItem;
