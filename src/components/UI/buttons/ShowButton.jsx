import Image from "next/image";
import Arrow from "@/images/arrow_red.svg";

const ShowButton = ({ func, style }) => {
  return (
    <button onClick={func}>
      <Image
        src={Arrow}
        width={32}
        height={32}
        alt="біла стрілочка на червоному полі"
        className={style}
      />
    </button>
  );
};

export default ShowButton;
