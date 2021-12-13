export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    //  previne o scroll rápido que é o padrão
    e.preventDefault();
    //  retorna o href igual ao id
    const href = e.currentTarget.getAttribute('href');
    //  retorna a seção que tem o id
    const section = document.querySelector(href);

    // eslint-disable-next-line max-len
    /*  forma alternativa que só funciona no chrome e firefox, media query foi criada para ser suportada em browsers antigos  */
    section.scrollIntoView({
      behavior: 'smooth',
      //  para alinhar ao topo do bloco
      block: 'start',
    });

    //  forma alternativa
    // const topo = section.offsetTop;
    // //window.scrollTo(0, topo); eixo x, eixo y para scrollar, pode passar um objeto como abaixo
    // window.scrollTo ({
    //     top: topo,
    //     behavior: "smooth"
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
