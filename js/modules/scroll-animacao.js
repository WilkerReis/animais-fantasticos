export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  let windowMetade;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      //  console.log(sectionTop);
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        //  o else aqui faz com que a animação aconteça mesmo depois de já ter acontecido uma vez
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    windowMetade = window.innerHeight * 0.7;
    //  já inicia mostrando a section de animais fantásticos
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
