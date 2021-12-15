export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.7;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowMetade;
      //  console.log(sectionTop);
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        //  o else aqui faz com que a animação aconteça mesmo depois de já ter acontecido uma vez
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
