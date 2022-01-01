document.addEventListener('DOMContentLoaded', function(){
// Déclenche la fonction quand on scroll
window.addEventListener('scroll', myFunctionForSticky);
// Recupérer la nav (menu)
let nav = document.getElementById("nav");
// Ajout de la classe sticky quand on scroll
function myFunctionForSticky() {
 nav.classList.toggle("sticky", window.scrollY > 0) 
}


window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  let hc = document.querySelectorAll('.h3');
  let front = document.querySelector('.front');
  let back = document.querySelector('.back');
  let cms = document.querySelector('.cms');
  let env = document.querySelector('.environnement');

  // permet de récupérer chaque élément avec la classe 'h3'
  for (let i = 0; i < hc.length; i++) {
    var hctop = hc[i].getBoundingClientRect().top;
    if(scrollTop > (scrollTop + hctop).toFixed() - clientHeight * 1) {
      hc[i].classList.add('active');
      hc[i].classList.remove('hidden');
    }else {
      hc[i].classList.add('hidden');
    }
  }
  
  let frontop = front.getBoundingClientRect().top;
  let backtop = back.getBoundingClientRect().top;
  let cmstop = cms.getBoundingClientRect().top;
  let envtop = env.getBoundingClientRect().top;
  
  if(scrollTop > (scrollTop + frontop).toFixed() - clientHeight * 1) {
    front.classList.add('active');
    front.classList.remove('hidden');
  }else{
    front.classList.add('hidden');
  }

  if(scrollTop > (scrollTop + backtop).toFixed() - clientHeight * 1) {
    back.classList.add('active');
    back.classList.remove('hidden');
  }else{
    back.classList.add('hidden');
  }

  if(scrollTop > (scrollTop + cmstop).toFixed() - clientHeight * 1) {
    cms.classList.add('active');
    cms.classList.remove('hidden');
  }else{
    cms.classList.add('hidden');
  }

  if(scrollTop > (scrollTop + envtop).toFixed() - clientHeight * 1) {
    env.classList.add('active');
    env.classList.remove('hidden');
  }else{
    env.classList.add('hidden');
  }

})

})
// effet machine à ecrire

// ES6 Class se referer au cours classe js de mdn
class TypeWriter {
    // element texte, les mots et le temps d'attente en millisecondes 
    constructor(txtElement, words, wait = 1000) {
      // this permet de faire référence à la classe
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  // création de la fonction type qui écrira
    type() {
      // recuperer le nombre de lettre du mot
      const current = this.wordIndex % this.words.length;
      // Recuperer le mot complet
      const fullTxt = this.words[current];
  
      // vérifier si le mot n'est pas en train de s'effacer
      if(this.isDeleting) {
        // si il s'efface enlever les lettres
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // sinon rajouter les lettres
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // insertion des mots dans le html
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // vitesse d'écriture des mots
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // verifier si le mot est complet
      if(!this.isDeleting && this.txt === fullTxt) {
        // faire une pause à la fin
        typeSpeed = this.wait;
        // mettre delete en true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // passer au mot suivant
        this.wordIndex++;
        // une pause avant de commencer à écrire 
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Initialisé une fois le dom chargé
  document.addEventListener('DOMContentLoaded', init);
  
  // lancer l'app
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // lancer l'écriture
    new TypeWriter(txtElement, words, wait);
  }