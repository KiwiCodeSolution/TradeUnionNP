import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import data from "@/data/managers.json";
import ManagersImage from "@/images/contacts/management.svg";
import Image from "next/image";
import Manager from "./Manager";

const Management = () => {
  return (
    <BaseSection style={""}>
      <Wrapper styles={"grid grid-cols-1 lg:grid-cols-3 pt-16 gap-y-8 gap-x-7 mt-10"}>
        <Image
          src={ManagersImage}
          width={265}
          height={329}
          alt="малюнок трьох людей, дівчини та двох хлопців"
          className="mx-auto -mt-10"
        />
        {data.map((el, index) => (
          <Manager key={el.name} item={el} index={index} />
        ))}
      </Wrapper>
    </BaseSection>
  );
};

export default Management;
