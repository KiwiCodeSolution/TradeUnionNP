export function fixTinyMCEImages(content, baseURL) {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;

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
