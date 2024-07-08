import { BackArrow } from "@/components/icons/IconsComponents";
import Link from "next/link";

const ButtonBack = ({ path, className }) => {
  return (
    <Link
      href={path}
      className={`w-fit h-10 py-3 px-3 rounded-md flex gap-x-5 items-center text-red border border-red hover:text-white hover:bg-red ${className}`}
    >
      <BackArrow />
      Повернутись
    </Link>
  );
};

export default ButtonBack;
