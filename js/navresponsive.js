let menu = document.querySelector(".menu");
let menuitem = document.querySelectorAll("#menuitem");
let menubtn = document.querySelector(".menubtn");
let nav = document.querySelector("#nav");


menubtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    if (nav.classList.contains('sticky')){
        nav.classList.add('sticky');
    }else {
    nav.classList.add('sticky');}
    menubtn.classList.toggle('rotate');

    for (let i = 0; i < menuitem.length; i++) {
        let menui = menuitem[i];
        menui.addEventListener("click", ()=> {
        menu.classList.remove('active');
        menubtn.classList.toggle('rotate');
        })
      }
});

