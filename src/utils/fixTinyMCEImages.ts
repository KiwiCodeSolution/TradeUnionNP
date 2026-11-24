import DOMPurify from "isomorphic-dompurify";

// iframe лишаємо: у редакторі є вставлені відео (TinyMCE), без цього вони б зникали при збереженні
const SANITIZE_CONFIG = {
  ADD_TAGS: ["iframe"],
  ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
};

export function fixTinyMCEImages(content, baseURL) {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = DOMPurify.sanitize(content || "", SANITIZE_CONFIG);

  var images = tempDiv.querySelectorAll("img");
  images.forEach(function (img) {
    var src = img.getAttribute("src") || "";
    var dataMceSrc = img.getAttribute("data-mce-src") || "";

    if (src.startsWith("../../../")) {
      src = src.replace(/^(\.\.\/){3}/, baseURL + "/");
      img.setAttribute("src", src);
    }

    if (dataMceSrc.startsWith("../../../")) {
      dataMceSrc = dataMceSrc.replace(/^(\.\.\/){3}/, baseURL + "/");
      img.setAttribute("data-mce-src", dataMceSrc);
    }
  });

  return tempDiv.innerHTML;
}
