export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // scrollToSection(e) {
  //   //  previne o scroll rápido que é o padrão
  //   e.preventDefault();
  //   //  retorna o href igual ao id
  //   const href = e.currentTarget.getAttribute('href');
  //   //  retorna a seção que tem o id
  //   const section = document.querySelector(href);

  //   section.scrollIntoView(this.options);
  // }

  // eslint-disable-next-line max-len
  /*  forma alternativa que só funciona no chrome e firefox, media query foi criada para ser suportada em browsers antigos  */

  //  forma alternativa
  // const topo = section.offsetTop;
  // //window.scrollTo(0, topo); eixo x, eixo y para scrollar, pode passar um objeto como abaixo
  // window.scrollTo ({
  //     top: topo,
  //     behavior: "smooth"
  // });

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
