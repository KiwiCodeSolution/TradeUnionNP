import DOMPurify from "isomorphic-dompurify";

// iframe пропускаємо лише з відеохостингу: довільна чужа сторінка в новині = фішинг
const TRUSTED_VIDEO_SRC = /^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\//i;

const SANITIZE_CONFIG = {
  ADD_TAGS: ["iframe"],
  ADD_ATTR: ["allow", "allowfullscreen", "frameborder"],
};

export function sanitizeNewsHtml(html: string): string {
  DOMPurify.addHook("uponSanitizeElement", (node, data) => {
    if (data.tagName !== "iframe") return;
    const element = node as Element;
    if (!TRUSTED_VIDEO_SRC.test(element.getAttribute("src") || "")) {
      element.parentNode?.removeChild(element);
    }
  });

  try {
    return DOMPurify.sanitize(html || "", SANITIZE_CONFIG);
  } finally {
    // хуки DOMPurify глобальні — прибираємо, щоб не впливати на інші виклики
    DOMPurify.removeHook("uponSanitizeElement");
  }
}
