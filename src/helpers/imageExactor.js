const els = document.querySelectorAll("source")
els.forEach(el => {
  const imgUrl = el.getAttribute("srcset");
  const fileName = imgUrl.split("/").at(-1)
  const ancher = document.createElement('a')
  ancher.setAttribute("href",imgUrl)
  ancher.setAttribute("download", fileName)
  document.querySelector("html").appendChild(ancher)
})