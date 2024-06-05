"use client";

import Button from "@/components/UI/buttons/Buttons";
import Modal from "@/components/UI/modal/Modal";
import Arrow from "@/images/arrow_white.svg";
import Image from "next/image";
import { useState } from "react";

const Join = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button view="red" clickFn={() => setIsOpenModal(true)}>
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
        <>Залиште Ваш номер телефону ми з Вами з'яжемося! </>
      </Modal>
    </>
  );
};

export default Join;
