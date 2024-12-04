"use client";

import React from "react";
import Rating from "react-rating";
import EmptyStar from "@/images/health/empty_star.png";
import FullStar from "@/images/health/star_red.png";
import Image from "next/image";

const RatingComponent = ({ rating, styles }) => {
  return (
    <div className={`${styles} flex items-end`}>
      <Rating
        initialRating={rating}
        readonly
        emptySymbol={
          <div className="star-wrapper">
            <Image
              src={EmptyStar}
              alt="порожня зірка"
              width={24}
              height={24}
              className="star-icon"
            />
          </div>
        }
        fullSymbol={
          <div className="star-wrapper">
            <Image
              src={FullStar}
              alt="заповнена зірка"
              width={24}
              height={24}
              className="star-icon"
            />
          </div>
        }
        fractions={10}
      />
      <span className="text-red text-[30.3px] font-bold leading-[1.1]">{rating}</span>
    </div>
  );
};

export default RatingComponent;
