const btnOpen = document.querySelector("#open")
const btnClose = document.querySelector("#close")
const menu = document.querySelector(".menu")
const arrow = document.querySelector("#arrow")
const hiddenList = document.querySelector(".hidden-list")
const hiddenListTwo = document.querySelector(".hidden-list__two") 
const arrowTwo = document.querySelector("#arrow-two")
const feature = document.querySelector("#feature")
const company = document.querySelector("#company")
let isHidden = true 
let isHiddenTwo = true

btnOpen.addEventListener('click', () => {
   menu.classList.add("visible") 
})
 btnClose.addEventListener('click', () => {
    menu.classList.remove('visible')
 })

arrow.addEventListener('click', hiddenMenu);
feature.addEventListener('click', hiddenMenu)
arrowTwo.addEventListener('click', hiddenMenuTwo)
company.addEventListener('click', hiddenMenuTwo)

   function hiddenMenu() {
       if (isHidden) { 
           hiddenList.style.display=('flex')
           isHidden = false
           arrow.classList.add('arrow-up')
       } else {
           hiddenList.style.display=('none')
           arrow.classList.remove('arrow-up')
           isHidden = true
       }
   }

   function hiddenMenuTwo () {
       if(isHiddenTwo) {
            hiddenListTwo.style.display=('flex')
            isHiddenTwo = false 
            arrowTwo.classList.add('arrow-up')
       } else {
            hiddenListTwo.style.display=('none')
            arrowTwo.classList.remove('arrow-up')
            isHiddenTwo = true
         }
   }

// Cambiar Imagen ! 

 function adjustImg () {
   const widthViewport = window.innerWidth
   const width = 1050
   const imgMain = document.querySelector("#img-main")
   if (widthViewport < width) {
      imgMain.src=('images/image-hero-mobile.png')
   }else {
      imgMain.src=('images/image-hero-desktop.png')
   }
 }
 window.addEventListener('resize', adjustImg)
 adjustImg()



 
    