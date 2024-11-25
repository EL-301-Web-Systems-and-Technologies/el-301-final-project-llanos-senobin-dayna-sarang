const closeBtn = document.querySelector(".bi-x-lg")
const menuBtn = document.querySelector(".bi-list")
const navLinks = document.querySelector("#navLinks")

const hideMenu = () => {
     navLinks.style.right = "-200px"
}


const showMenu = () => {
    navLinks.style.right = "0"
}

closeBtn.addEventListener("click", hideMenu)
menuBtn.addEventListener("click", showMenu)