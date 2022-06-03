

const menud = document.querySelector(".nav-links")
const menu = document.querySelector(".menu-burger-container")

const active = () => menu.classList.toggle('active')

const menudd = () => menud.classList.toggle('apagar')


menu.addEventListener('click', menudd)
menu.addEventListener('click', active)
