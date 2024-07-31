"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Bookmark from "@/images/bookmark.svg";
import { useState } from "react";
import Modal from "@/components/UI/modal/Modal";
import docs from "@/data/aid_documents.json";
import ListItem from "@/components/UI/items/ListItem";

const DocumentsList = ({ locale }) => {
  const t = useTranslations("Financial_Aid");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentDocument, setCurrentDocument] = useState("");

  function handleCurrentDoc(filter) {
    setIsOpenModal(true);
    setCurrentDocument(docs.find((doc, index) => index === filter));
  }

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {docs.map((el, index) => (
          <li
            className="w-full flex flex-col items-start justify-between bg-white rounded-2xl gap-y-4 px-8 py-6 relative"
            key={el.title}
          >
            <Image
              src={Bookmark}
              width={23}
              height={24}
              alt="червона закладка"
              className="absolute -top-2 left-7"
            />
            <h3 className="text-2xl font-bold">{t(`docs.${index}.title`)}</h3>
            <p className="text-lg text-grey">{t(`docs.${index}.text`)}</p>
            <div className="w-full flex flex-col gap-y-8 items-start">
              <button
                className="text-lg text-red hover:underline hover:underline-offset-2"
                onClick={() => handleCurrentDoc(index)}
              >
                {t(`docs_modal_button`)} <span> &gt;</span>
              </button>
              <a
                href={el.file}
                target="_blank"
                className="text-lg text-red hover:underline hover:underline-offset-2"
              >
                {t(`docs_modal_link`)} <span> &gt;</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
      {currentDocument && (
        <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
          <ul className="flex flex-col gap-y-3 max-h-[500px] xl:max-h-fit px-8 overflow-auto py-12">
            {locale === "uk"
              ? currentDocument.points_ua.map((el, index) => (
                  <ListItem item={el} gap={5} key={el} />
                ))
              : currentDocument.points_en.map((el, index) => (
                  <ListItem item={el} gap={5} key={el} />
                ))}
          </ul>
        </Modal>
      )}
    </>
  );
};

export default DocumentsList;
