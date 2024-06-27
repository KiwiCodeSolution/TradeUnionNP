"use client";

import Button from "@/components/UI/buttons/Buttons";
import Modal from "@/components/UI/modal/Modal";
import Arrow from "@/images/arrow_white.svg";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../contactForm/ContactForm";

const Join = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const handleFormSubmit = () => {
    setIsOpenModal(false);
    setIsOpenConfirmModal(true);
  };

  return (
    <>
      <Button view="red" clickFn={() => setIsOpenModal(true)} style={"mt-9 mb-16 "}>
        долучитися{" "}
        <Image
          src={Arrow}
          width={30}
          height={30}
          alt="зображення червоної іконки-стрілочки вправо на білому фоні"
          className="arrow-icon"
        />
      </Button>
      <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        <div className="rounded-2xl bg-bgGrey p-8 flex flex-col gap-y-6">
          <h3 className="text-2xl font-bold text-center">
            Залиште <span className="text-red">свої дані</span> <br />і ми зв'яжемося з вами!
          </h3>
          <ContactForm onFormSubmit={handleFormSubmit} section="modal" />
        </div>
      </Modal>
      <Modal onClose={() => setIsOpenConfirmModal(false)} isOpen={isOpenConfirmModal}>
        <div className="rounded-2xl w-full h-full p-10 flex flex-col items-center gap-y-10 bg-bgGrey">
          <h3 className="text-2xl font-bold text-center">
            Ваш запит <span className="text-red">надіслано</span>!
          </h3>
          <h3 className="text-[22px] font-bold text-center">
            <span className="text-red">Наш представник</span> зв'яжеться
            <br /> з Вами найближчим часом!
          </h3>
        </div>
      </Modal>
    </>
  );
};

export default Join;
