const els = document.querySelectorAll("source")
let urlSet = new Set()
els.forEach(el => {
  const imgUrl = el.getAttribute("srcset");
  urlSet.add(imgUrl)
})

const list = [...urlSet]

list.map((url)=>{
  const fileName = url.split("/").at(-1)
  const ancher = document.createElement('a')
  ancher.setAttribute("href",url)
  ancher.setAttribute("download", fileName)
  document.querySelector("html").appendChild(ancher)
})
