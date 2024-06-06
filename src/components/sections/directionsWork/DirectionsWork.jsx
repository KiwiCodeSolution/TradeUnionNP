import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { directions } from "@/constants/directionsWork";
import DirectionsWorkItem from "./DirectionsWorkItem";

const DirectionsWork = () => {
  return (
    <BaseSection style="">
      <Wrapper styles={"flex flex-col"}>
        {directions.map((el, index) => (
          <DirectionsWorkItem key={el.image} index={index} item={el} />
        ))}
      </Wrapper>
    </BaseSection>
  );
};

export default DirectionsWork;
