import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const VideoSection = () => {
  return (
    <BaseSection style={"my-8 md:my-16"}>
      <Wrapper styles={"grid grid-cols-1 xl:grid-cols-2 gap-5"}>
        <iframe
          // height="315"
          src="https://www.youtube.com/embed/vRKRXjHTWAo?si=8-iqfNPdebyGCjAo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="w-full h-[315px] xl:h-[400px] mx-auto"
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lxWLxcB0o4k?si=I_D71biEYe1qYZ4F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="w-full h-[315px] xl:h-[400px] mx-auto"
        ></iframe>
      </Wrapper>
    </BaseSection>
  );
};

export default VideoSection;
