import { Arrow, ArrowWhite } from "@/components/icons/IconsComponents";

const ShowButton = ({ func, style, btnStyle, isRed, isBlack }) => {
  return (
    <button
      onClick={func}
      className={`rounded-full ${
        isRed
          ? "w-[44px] h-[44px] bg-red hover:bg-white hover:border hover:border-red"
          : isBlack
          ? "w-8 h-8 bg-black"
          : "w-[44px] h-[44px] bg-white hover:bg-red"
      } rounded-button flex items-center justify-center cursor-pointer ${btnStyle}`}
    >
      {isBlack ? <ArrowWhite className={style} /> : <Arrow className={style} />}
    </button>
  );
};

export default ShowButton;
