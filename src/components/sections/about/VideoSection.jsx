import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const VideoSection = () => {
  return (
    <BaseSection style={"my-8 md:my-16"}>
      <Wrapper>
        <iframe
          // height="315"
          src="https://www.youtube.com/embed/vRKRXjHTWAo?si=8-iqfNPdebyGCjAo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="w-full h-[315px] md:w-[560px] xl:w-9/12 xl:h-[450px] mx-auto"
        ></iframe>
      </Wrapper>
    </BaseSection>
  );
};

export default VideoSection;
