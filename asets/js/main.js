const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-toggler");
let navitem = document.querySelector(".nav-item");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navitem.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navitem.classList.remove("open");
}