export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  // eslint-disable-next-line max-len
  /* pode-se passar um objeto dentro da função de callback desde que ele tenha a função handleEvent() */
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    //  adicionando ao final do body a div
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    //  this = item = div com evento por conta do mouseover
    const tooltipBox = criarTooltipBox(this);
    //  adicionando a tooltipBox ao objeto criado
    onMouseLeave.tooltipBox = tooltipBox;
    //  adicionando o elemento ao objeto
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((item) => {
    //  mouseover = hover do css
    item.addEventListener('mouseover', onMouseOver);
  });
}
