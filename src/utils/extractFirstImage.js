export function extractFirstImage(content) {
  const imgRegex = /<img\s[^>]*src="([^"]*)"/i;
  const match = content.match(imgRegex);
  const relativePathPattern = /^(\.\.\/){3,}/; // Для шляху типу "../../../"
  if (match && relativePathPattern.test(match[1])) {
    return null;
  }
  return match ? match[1] : null;
}
