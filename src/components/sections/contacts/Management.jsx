import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ManagersImage from "@/images/contacts/management.svg";
import data from "@/data/managers.json";
import Manager from "./Manager";

const Management = () => {
  return (
    <BaseSection style={""}>
      <Wrapper styles={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 gap-y-8"}>
        <Image
          src={ManagersImage}
          width={265}
          height={329}
          alt="малюнок трьох людей, дівчини та двох хлопців"
        />
        {data.map(el => (
          <Manager key={el.name} item={el} />
        ))}
      </Wrapper>
    </BaseSection>
  );
};

export default Management;
