const b1 = document.querySelector(".b-1")
console.log(b1)
const h8 =document.querySelector(".h-8")



const body = document.querySelector("body")

b1.addEventListener("click",() => {
    body.style.backgroundImage = "url(img2.jpg)"
    h8.textContent= "wizard"
})

