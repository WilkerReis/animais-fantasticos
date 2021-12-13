export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // eslint-disable-next-line max-len
  //  se o usuário estiver em outra página que não tem as classes que foram selecionadas no tabMenu e content então vai dar erro no console, para isso testa-se se há ou não antes de executar com o if

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo', tabContent[0].dataset.anime);
    // eslint-disable-next-line max-len
    //  não é o ideal passar assim no addEventListener: activeTab(index), ou passa o nome apenas ou passa dentro da function

    tabMenu.forEach((imagens, index) => {
      imagens.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
