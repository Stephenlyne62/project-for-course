
// target elements "menu links" and "hamburger icon"//
// we are adding or removing the open class of each element//

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}