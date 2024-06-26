"use client";

import Button from "@/components/UI/buttons/Buttons";
import Modal from "@/components/UI/modal/Modal";
import Arrow from "@/images/arrow_white.svg";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../contactForm/ContactForm";

const Join = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button view="red" clickFn={() => setIsOpenModal(true)} style={"mt-9 mb-16"}>
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
        <div className="w-2/5 h-2/5 rounded-2xl bg-bgGrey p-6 flex flex-col gap-y-4">
          <h3>Залиште свої дані і ми зв'яжемося з вами!</h3>
          <ContactForm />
        </div>
      </Modal>
    </>
  );
};

export default Join;
