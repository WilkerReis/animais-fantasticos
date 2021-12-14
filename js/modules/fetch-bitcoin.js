export default function fetchBitcoin(url, target) {
  async function fetchCoin() {
    try {
      const fetchBtc = await fetch(url);
      const jsonBtc = await fetchBtc.json();
      const spanBtc = document.querySelector(target);
      const valorBtc = (100 / jsonBtc.BRL.sell).toFixed(7);
      spanBtc.innerText = `${valorBtc} ₿`;
    } catch (erro) {
      console.log(erro);
    }
  }
  return fetchCoin();
}
