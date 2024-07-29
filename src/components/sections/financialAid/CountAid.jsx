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
    <p className="text-center text-red text-[30px] md:text-[50px] font-bold">
      <span>&gt;</span>
      <CountUp start={29000000} end={30000000} formattingFn={formatNumber} /> {currency}
    </p>
  );
};

export default CountAid;
