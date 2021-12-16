export default function debounce(callback, delay) {
  let timer;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
