import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const VideoSection = () => {
  return (
    <BaseSection style={"my-8 md:my-16"}>
      <Wrapper>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/lxWLxcB0o4k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="w-full md:w-[560px] mx-auto"
        ></iframe>
      </Wrapper>
    </BaseSection>
  );
};

export default VideoSection;
