import { Cross } from "@/components/icons/IconsComponents";
import useScrollBlock from "@/hooks/useScrollBlock";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  function closeModal() {
    allowScroll();
    onClose();
  }

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById("modal-root"));

    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }

    function keyDown(e) {
      if (e.code !== "Escape") {
        return;
      }
      closeModal();
    }
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
      allowScroll();
    };
  }, [isOpen, blockScroll, allowScroll, onClose]);

  if (!mounted || !isOpen || !modalRoot) return null;

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
    return;
  }

  return createPortal(
    isOpen ? (
      <div
        className="fixed w-full h-screen top-0 left-0 bg-slate-400 bg-opacity-50 flex items-center justify-center"
        onClick={handleOverlayClick}
      >
        <div className="flex flex-col min-w-[200px] max-w-[600px] bg-white rounded-2xl mx-auto relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-red flex items-center justify-center cross-button hover:bg-red"
          >
            <Cross />
          </button>
          {children}
        </div>
      </div>
    ) : null,
    modalRoot
  );
};

export default Modal;
