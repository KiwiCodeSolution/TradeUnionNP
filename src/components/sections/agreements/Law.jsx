import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import LawItem from "@/components/LawItem";
import Title from "@/components/Title";

const Law = ({ children, data }) => {
  return (
    <BaseSection style={"py-16"}>
      <Wrapper styles={"flex flex-col gap-y-4"}>
        <h3 className="text-sm text-liteGrey uppercase leading-[1.2] font-bold text-center">
          ЗАКОН УКРАЇНИ
        </h3>

        <Title tag="h2" styles="text-center">
          {children}
        </Title>
        <div className="grid rid-grid-cols-1 md:grid-cols-2 gap-4 z-[1]">
          {data.map(el => (
            <LawItem key={el.title} item={el} />
          ))}
        </div>
        <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0]" />
      </Wrapper>
    </BaseSection>
  );
};

export default Law;
