export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const fetchBtc = await fetch(url);
      const jsonBtc = await fetchBtc.json();
      const spanBtc = document.querySelector('.btc-preco');
      const valorBtc = (100 / jsonBtc.BRL.sell).toFixed(7);
      spanBtc.innerText = `${valorBtc} ₿`;
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
