import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { directions } from "@/constants/directionsWork";
import DirectionsWorkItem from "./DirectionsWorkItem";

const DirectionsWork = () => {
  return (
    <BaseSection style="">
      <div className="w-full absolute top-0 h-40 left-0 right-0 z-0 bg-gradient-to-t from-white to-bgGrey" />
      <Wrapper styles={"flex flex-col relative"}>
        {directions.map((el, index) => (
          <DirectionsWorkItem key={el.image} index={index} item={el} />
        ))}
      </Wrapper>
    </BaseSection>
  );
};

export default DirectionsWork;
