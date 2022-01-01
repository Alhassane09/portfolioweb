let menu = document.querySelector(".menu");
let menubtn = document.querySelector(".menubtn");
let nav = document.querySelector("#nav");


menubtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    if (nav.classList.contains('sticky')){
        nav.classList.add('sticky');
    }else {
    nav.classList.add('sticky');}
    menubtn.classList.toggle('rotate');
});