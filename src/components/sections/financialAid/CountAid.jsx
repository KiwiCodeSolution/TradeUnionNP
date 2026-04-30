"use client";
import CountUp from "react-countup";

const CountAid = ({ currency }) => {
  function formatNumber(number) {
    if (number > 999) {
      return new Intl.NumberFormat("uk-UA").format(number);
    }
    return number;
  }
  return (
    <>
      <p className="text-center text-red text-[30px] md:text-[50px] font-bold">
        <span>&gt;</span>
        <CountUp start={36500000} end={38820000} formattingFn={formatNumber} /> {currency}
        <br />
      </p>
      <p className="text-[18px] md:text-[24px] text-center mb-3">
        {currency === "грн"
          ? "в тому числі податки 1,32 млн.грн"
          : "including taxes of 1.32 million UAH"}
      </p>
    </>
  );
};

export default CountAid;
