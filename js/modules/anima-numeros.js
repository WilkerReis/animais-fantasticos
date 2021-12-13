export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 20 * Math.random());
    });
  }

  //  definida antes apenas para remover o erro
  let observer;

  //  mutation é tipo o event que dentro dele tem algumas coisas numa array-like
  //  neste caso muda apenas a classe que o scroll-animacao insere e remove
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');

  //  recebe argumento que é o callback, função que ocorrerá quando a mutação ocorrer
  observer = new MutationObserver(handleMutation);

  //  observa os atributos desta maneira
  observer.observe(observerTarget, { attributes: true });
}
