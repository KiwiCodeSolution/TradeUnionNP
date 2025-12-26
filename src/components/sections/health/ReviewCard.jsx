import NoPhoto from "@/images/no-photo.png";
import Image from "next/image";
import RatingComponent from "./Rating";

const ReviewCard = ({ review }) => {
  console.log("review", review, review.image);
  return (
    <article className="w-full md:w-[310px] xl:w-[560px] h-fit bg-white shadow-lg rounded-[32px] p-6 mx-auto flex flex-col gap-y-3 relative overflow-hidden">
      <div className="w-full h-[252px] xl:h-[471px] rounded-[20px] overflow-hidden">
        <Image
          src={review.image || NoPhoto}
          width={512}
          height={471}
          className="w-[274px] h-[252px] object-cover xl:w-full xl:h-full xl:content-center"
          alt={`фото ${review.author}`}
        />
      </div>

      <div className="w-full h-fit flex flex-col gap-y-3 xl:gap-y-6">
        <div className="flex flex-col relative z-[1]">
          <div className="flex items-center justify-center mb-3">
            <p className="text-[17px] w-1/2 xl:text-[30.3px] font-bold leading-[33.33px]">
              {review.author}
            </p>
            <RatingComponent
              styles={"w-1/2 mt-[6px] items-center justify-end"}
              rating={review.rating}
              startStyles={"w-[17px] h-[17px] xl:w-6 xl:h-6"}
              textStyles={"text-[17px] xl:text-[30.3px]"}
            />
          </div>

          <p className="text-[10px] xl:text-xl font-bold leading-[1.5]">{review.address}</p>
        </div>
        <p className="text-[10px] xl:text-lg text-bgBlack font-light leading-[1.5]">
          {review.description}
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
