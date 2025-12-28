"use client";

import { deleteItem, toggleVisible } from "@/services/defenders";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Edit, Hide, Show, Trash } from "@/components/icons/IconsComponents";

const FunctionalButtons = ({ item, token }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const toastId = toast.custom(t => (
      <div
        className={`bg-white p-4 rounded shadow-lg flex flex-col ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="mb-3">Ви дійсно бажаєте видалити цей запис?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await deleteItem(item._id, token);
                toast.success("Запис видалено!");
                router.refresh();
              } catch (error) {
                console.error("Error deleting news:", error);
                if (error.message === "News not found") {
                  toast.error("Такий запис не знайдено.");
                } else {
                  toast.error("Щось пішло не так. Спробуйте ще раз.");
                }
              }
            }}
            className="bg-red text-white px-3 py-1 rounded"
          >
            Так
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Ні
          </button>
        </div>
      </div>
    ));
  };

  const handleToggle = async () => {
    try {
      await toggleVisible(item._id, token);
      toast.success("Статус видимості оновлено");
      router.refresh(); // сторінка чемно оновилась
    } catch {
      toast.error("Не вдалося змінити видимість");
    }
  };

  return (
    <div className="w-full h-8 bg-white/40 absolute top-0 left-0 flex z-0 rounded-t-[32px] overflow-hidden">
      <Link
        href={`/uk/admin/defenders/${item._id}`}
        className="w-1/3 cursor-pointer border-r-[1px] border-black/10 flex items-center justify-center"
      >
        <Edit className={"w-8 h-8"} />
      </Link>
      <button
        className="w-1/3 cursor-pointer text-center border-x-[1px] border-black/10 flex items-center justify-center group"
        onClick={handleToggle}
      >
        {item.is_active ? (
          <Hide className={"w-8 h-8 fill-red group-hover:fill-white transition-all duration-300"} />
        ) : (
          <Show className={"w-8 h-8 fill-red group-hover:fill-white transition-all duration-300"} />
        )}
      </button>
      <button
        onClick={handleDelete}
        className="w-1/3 cursor-pointer text-center border-l-[1px] border-black/10 flex items-center justify-center"
      >
        <Trash />
      </button>
    </div>
  );
};

export default FunctionalButtons;
