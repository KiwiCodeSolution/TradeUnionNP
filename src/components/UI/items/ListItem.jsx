import RedDot from "../RedDot";

const ListItem = ({ item, gap, elements }) => {
  return (
    <li className={`w-full text-base md:text-lg text-grey flex flex-col`}>
      <div className={`w-full flex gap-x-${gap} items-center`}>
        <RedDot />
        <p className={`w-[90%]`}>{item}</p>
      </div>
      {elements && (
        <ul className="list-decimal pl-12 mt-5">
          {elements.map(el => el && <li key={el}>{el}</li>)}
        </ul>
      )}
    </li>
  );
};

export default ListItem;
