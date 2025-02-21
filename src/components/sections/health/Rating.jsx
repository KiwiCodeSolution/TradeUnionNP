"use client";

import React from "react";
import Rating from "react-rating";
import EmptyStar from "@/images/health/empty_star.png";
import FullStar from "@/images/health/star_red.png";
import Image from "next/image";

const RatingComponent = ({ rating, styles, startStyles, textStyles }) => {
  return (
    <div className={`${styles} flex items-baseline`}>
      <Rating
        initialRating={rating}
        readonly
        emptySymbol={
          <div className={`${startStyles ? startStyles : "w-6 h-6"} star-wrapper-custom`}>
            <Image
              src={EmptyStar}
              alt="порожня зірка"
              width={24}
              height={24}
              className={`star-icon `}
            />
          </div>
        }
        fullSymbol={
          <div className={`${startStyles ? startStyles : "w-6 h-6"} star-wrapper-custom`}>
            <Image
              src={FullStar}
              alt="заповнена зірка"
              width={24}
              height={24}
              className={`star-icon`}
            />
          </div>
        }
        placeholderSymbol={
          <Image src={EmptyStar} alt="напівзаповнена зірка" width={24} height={24} />
        }
        fractions={10}
      />
      <span
        className={`text-red font-bold leading-[1.1] ${textStyles ? textStyles : "text-[30.3px]"}`}
      >
        {rating}
      </span>
    </div>
  );
};

export default RatingComponent;
