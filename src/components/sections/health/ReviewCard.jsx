import NoPhoto from "@/images/no-photo.png";
import Image from "next/image";
import RatingComponent from "./Rating";

const ReviewCard = ({ review }) => {
  return (
    <article className="w-full xl:w-[560px] h-fit bg-white shadow-lg rounded-[32px] p-6 flex flex-col gap-y-3 relative mx-auto">
      <div className="w-full h-[274px] xl:h-[471px] rounded-[20px] overflow-hidden">
        <Image
          src={review.image || NoPhoto}
          width={512}
          height={471}
          className="w-[274px] h-[274px] xl:w-full xl:h-full content-center"
          alt={`фото ${review.author}`}
        />
      </div>

      <div className="w-full h-fit flex flex-col gap-y-6">
        <div className="flex flex-col relative z-[1]">
          <div className="flex items-center justify-center mb-3">
            <p className="w-1/2 text-[30.3px] font-bold leading-[33.33px]">{review.author}</p>
            <RatingComponent
              styles={"w-1/2 mt-[6px] items-center justify-end"}
              rating={review.rating}
            />
          </div>

          <p className="text-xl font-bold leading-[1.5]">{review.address}</p>
        </div>
        <p className="text-lg text-bgBlack font-light leading-[1.5]">{review.description}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
