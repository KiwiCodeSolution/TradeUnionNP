import { Arrow } from "@/components/icons/IconsComponents";

const ShowButton = ({ func, style, btnStyle }) => {
  return (
    <button
      onClick={func}
      className={`w-[44px] h-[44px] rounded-full bg-white hover:bg-red rounded-button flex items-center justify-center ${btnStyle}`}
    >
      <Arrow className={style} />
    </button>
  );
};

export default ShowButton;
