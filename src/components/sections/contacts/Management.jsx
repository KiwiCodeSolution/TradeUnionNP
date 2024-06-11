import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ManagersImage from "@/images/contacts/management.svg";

const Management = () => {
  return (
    <BaseSection>
      <Wrapper styles={"grid grid-cols-4"}>
        <Image
          src={ManagersImage}
          width={265}
          height={329}
          alt="малюнок трьох людей, дівчини та двох хлопців"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Management;
