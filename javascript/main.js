
window.onload = () => {

    const menuBtn = document.querySelector(".burger");
    const menu = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    });

}