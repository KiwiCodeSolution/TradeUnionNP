export function extractFirstImage(content) {
  const imgRegex = /<img\s[^>]*src="([^"]*)"/i;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
}
