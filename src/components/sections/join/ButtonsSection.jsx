"use client";

import Button from "@/components/UI/buttons/Buttons";
import Modal from "@/components/UI/modal/Modal";
import { useState } from "react";
import ModalAwis from "./ModalAwis";
import ModalPMO from "./ModalPMO";

const ButtonsSection = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [type, setType] = useState("");

  function toggleModal(typeModal = "") {
    if (!isOpenModal) {
      setType(typeModal);
    } else {
      setType("");
    }
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-9 items-center justify-between">
        <Button
          view="red"
          clickFn={() => toggleModal("Awis")}
          style={"xl:mt-9 xl:mb-16 join-button flex items-center justify-center"}
        >
          <p className="text-center uppercase text-[40px] xl:text-[55px]">Awis</p>
        </Button>
        <Button
          view="red"
          clickFn={() => toggleModal("РМО")}
          style={
            "xl:mt-9 xl:mb-16 uppercase text-[40px] xl:text-[55px] join-button flex items-center justify-center"
          }
        >
          Awis “РМО”
        </Button>
      </div>
      <Modal onClose={() => toggleModal()} isOpen={isOpenModal} type={"join"}>
        <div className="rounded-2xl p-8">{type === "Awis" ? <ModalAwis /> : <ModalPMO />}</div>
      </Modal>
    </>
  );
};

export default ButtonsSection;
