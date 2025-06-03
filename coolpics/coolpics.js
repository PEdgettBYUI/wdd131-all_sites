// Use the following to make the zoomed-in image use the enlarged jpeg
// const imgSrc = event.target.src.split('-');
// const newSrc = imgSrc[0] + '-full.jpeg';

const menuButton = document.querySelector('.menu-button');
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);