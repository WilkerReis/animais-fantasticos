export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // Bind do handleMutation senão o this ia ser o objeto criado: observer
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do Dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
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
  }

  // Ativa incrementarNumero para cada
  // número selecionado do Dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  //  mutation é tipo o event que dentro dele tem algumas coisas numa array-like
  //  neste caso muda apenas a classe que o scroll-animacao insere e remove

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe 'ativo' é adicionada ao element target
  addMutationObserver() {
    //  recebe argumento que é o callback, função que ocorrerá quando a mutação ocorrer
    this.observer = new MutationObserver(this.handleMutation);

    //  observa os atributos desta maneira
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
