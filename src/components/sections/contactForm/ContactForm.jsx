"use client";

import React, { useState } from "react";
import InputMask from "react-input-mask";
import Image from "next/image";
import Flag from "@/images/flag.svg";
import { regions } from "@/constants/regions";
import Button from "@/components/UI/buttons/Buttons";

const ContactForm = ({ onFormSubmit, section, inputStyle, placeholder, errors, button }) => {
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formError, setFormError] = useState("");

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSelectChange = e => {
    setSelectedOption(e.target.value);
  };

  const resetForm = () => {
    setFormError("");
    setSelectedOption("");
    setPhone("");
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Перевірка валідності телефону
    const numericValue = phone.replace(/\D/g, "");
    const isPhoneValid = numericValue.length === 12;

    if (isPhoneValid && selectedOption) {
      console.log("Selected Option:", selectedOption, "Phone:", phone);
      setFormError("");

      // Скидання форми
      resetForm();

      // Відправка даних та виклик колбека
      if (onFormSubmit) {
        onFormSubmit();
      }
    } else {
      if (!isPhoneValid && !selectedOption) {
        setFormError(errors[0]);
      } else if (!isPhoneValid) {
        setFormError(errors[1]);
      } else if (!selectedOption) {
        setFormError(errors[2]);
      }
    }
  };

  return (
    <form className="flex flex-col gap-y-5 pb-7 relative" onSubmit={handleSubmit}>
      <div className="w-full h-full relative">
        <InputMask
          mask="+38 (999) 999-99-99"
          maskChar="_"
          value={phone}
          onChange={handlePhoneChange}
        >
          {inputProps => (
            <div className="w-full h-full relative">
              <input
                {...inputProps}
                type="text"
                placeholder="+38 (___) ___-__-__"
                className={`w-full ${
                  section === "modal" ? "md:w-full" : "md:w-4/5"
                }  py-5 pl-[70px] pr-5 text-lg border-0 focus:outline-none focus:shadow-none rounded-full h-14  ${
                  inputStyle === "bg-white" ? "bg-bgGrey" : "bg-[#f9f0da]"
                }`}
              />
              <Image
                src={Flag}
                width={40}
                height={30}
                alt="прапор України"
                className="w-10 absolute left-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
          )}
        </InputMask>
      </div>

      <input
        type="text"
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder={placeholder}
        list="regions-list"
        className={`text-[15px] ${section === "modal" ? "w-full" : "w-full md:w-4/5"} ${
          inputStyle === "bg-white" ? "bg-bgGrey" : "bg-[#f9f0da]"
        } rounded-full h-14 py-4 px-5 focus:outline-none focus:shadow-none relative`}
      />
      <datalist id="regions-list">
        {regions.map((region, index) => (
          <option key={index} value={region} />
        ))}
      </datalist>

      <Button view={"red"} btnType="submit" style={section === "modal" ? "mx-auto mt-5" : ""} icon>
        {button}
      </Button>
      {formError && <p className="text-red absolute -bottom-1 left-1 italic">{formError}</p>}
    </form>
  );
};

export default ContactForm;
