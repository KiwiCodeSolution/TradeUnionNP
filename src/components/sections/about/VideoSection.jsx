import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const VideoSection = () => {
  return (
    <BaseSection style={"my-16"}>
      <Wrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lxWLxcB0o4k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="mx-auto"
        ></iframe>
      </Wrapper>
    </BaseSection>
  );
};

export default VideoSection;
