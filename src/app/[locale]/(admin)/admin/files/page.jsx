"use client";

import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import FileExample from "@/components/sections/files/File";
import files from "@/data/admin_applications.json";

export default function UpdateFilesPage() {
  // console.log(files.find(el => el.sections === "statutory"));
  return (
    <main className="flex flex-col min-h-screen px-10 py-5">
      <TitleAdmin>Робота з файлами</TitleAdmin>
      <section
        className="flex flex-col gap-y-5 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        <h2 className="text-center text-3xl font-bold my-5">Статутні документи</h2>
        {files
          .filter(el => el.sections === "statutory")
          .map(el => (
            <FileExample key={el.id} file={el} />
          ))}

        <h2 className="text-center text-3xl font-bold my-5">Заяви</h2>
        {files
          .filter(el => el.sections === "application")
          .sort((a, b) => a.name.localeCompare(b.name)) // Додаємо сортування
          .map(el => (
            <FileExample key={el.id} file={el} />
          ))}
      </section>
    </main>
  );
}
