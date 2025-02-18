import { Arrow } from "@/components/icons/IconsComponents";

const ShowButton = ({ func, style, btnStyle, isRed }) => {
  return (
    <button
      onClick={func}
      className={`w-[44px] h-[44px] rounded-full ${
        isRed ? "bg-red hover:bg-white hover:border hover:border-red" : "bg-white hover:bg-red"
      } rounded-button flex items-center justify-center cursor-pointer ${btnStyle}`}
    >
      <Arrow className={style} />
    </button>
  );
};

export default ShowButton;
