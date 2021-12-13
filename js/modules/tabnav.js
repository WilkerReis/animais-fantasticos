export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // eslint-disable-next-line max-len
  //  se o usuário estiver em outra página que não tem as classes que foram selecionadas no tabMenu e content então vai dar erro no console, para isso testa-se se há ou não antes de executar com o if

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    // eslint-disable-next-line max-len
    //  não é o ideal passar assim no addEventListener: activeTab(index), ou passa o nome apenas ou passa dentro da function

    this.tabMenu.forEach((imagens, index) => {
      imagens.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
