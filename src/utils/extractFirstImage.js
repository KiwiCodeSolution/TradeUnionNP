// export function extractFirstImage(content) {
//   const imgRegex = /<img\s[^>]*src="([^"]*)"/i;
//   const match = content.match(imgRegex);
//   return match ? match[1] : null;
// }

export function extractFirstImage(content) {
  const imgRegex = /<img\s[^>]*src="([^"]*)"/i;
  const match = content.match(imgRegex);

  if (match) {
    let imageUrl = match[1];

    // Якщо шлях починається з "../../.." або подібного, очищаємо його до /uploads
    const relativePathPattern = /^(\.\.\/){3,}/; // Для шляху типу "../../../"
    if (relativePathPattern.test(imageUrl)) {
      imageUrl = imageUrl.replace(relativePathPattern, "/uploads");
    }

    return imageUrl;
  }

  return null;
}
