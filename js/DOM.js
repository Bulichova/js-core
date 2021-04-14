import pictures from '../db/pictures.js'
console.log(pictures)
console.dir(document)
// Получаем доступ к элементу
document.querySelector('body').style.background = 'grey'
const navList = document.querySelector('.navList')
console.log(navList)
console.dir(navList)
navList.style.listStyle = 'none'
navList.style.display = 'flex'
navList.style.justifyContent = 'space-evenly'
console.log(navList.children)

// преобразуем коллекцию детей элементы в массив

const items = [...navList.children]
console.log(items)
items.map((item) => {
  console.log(item.children)
  const links = [...item.children]
  console.log(links)
  links.map((link) => {
    console.log(link)
    link.style.textDecoration = 'none'
    link.style.color = 'pink'
    link.style.padding = '20px'
    link.style.border = '1px solid pink'
  })
})
// const header = document.querySelector("#header")
const hesder = document.getElementById('header')
header.style.borderBottom = '2px solid '
header.style.padding = '20px 0'

// получаем доступ к группе элементов

const images = [...document.querySelectorAll('.sectionList img')]
console.log(images)

// Впереборе тегов img запишем им ссылки в атрибуты src

for (let i = 0; i < images.length; i++) {
  console.log(images[i])
  console.log(pictures[i])
  images[i].src = pictures[i]
  console.log(images)
  images[i].setAttribute('width', '200px')
}

const sectionList = document.querySelector('.sectionList')
sectionList.style.listStyle = 'none'
// sectionList.style.display = "flex"
sectionList.classList.add('list')
console.log(sectionList)
// sectionList.classList.remove("list")
// console.log(sectionList);

const imgTitle = document.getElementById("imgSection")
imgTitle.textContent = "my favourite pictures"
console.log(imgTitle);
imgTitle.classList.add("title")
