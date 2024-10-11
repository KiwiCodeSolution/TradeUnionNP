// Функція для отримання новини із серверу
// async function fetchNewsBySlug(slug) {
//   // const response = await fetch(`https://api.example.com/news/${slug}`);
//   // const news = await response.json();

//   const news = {
//     ...currentNews,
//     // title: `Це перша тестова новина з id:${id}`,
//     // sections: ["Новина", "Інтерв'ю"],
//     metaTags: currentNews.sections,
//     status: "published",
//     content: currentNews.shortText,
//   };
//   return news;
// }

// Функція для генерації метаданих
// export async function generateMetadata({ params: { slug } }) {
//   const news = await fetchNewsBySlug(slug);

//   return {
//     title: `Редагування новини: ${news.title}`, // Динамічний title
//     description: news.metaTags || "Опис цієї новини", // Динамічний description
//     keywords: news.metaTags, // Метатеги
//   };
// }

export default function NewsPageBySlug({ params: { slug } }) {
  return (
    <main className="w-full  bg-bgGrey">
      <h1>{slug}</h1>
    </main>
  );
}
