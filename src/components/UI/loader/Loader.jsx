import Image from "next/image";
import Logo from "@/images/logo-sm.svg";

const Loader = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-slate-400 bg-opacity-60 flex items-center justify-center">
      <Image
        src={Logo}
        width={164}
        height={165}
        alt="Логотип компанії"
        className="animate-bounce"
      />
    </div>
  );
};

export default Loader;
