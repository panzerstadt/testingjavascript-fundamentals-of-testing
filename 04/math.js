const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = async (...args) => {
  await delay(1000);
  return sum(...args);
};
const subtractAsync2 = async (...args) => {
  return delay(500).then(() => subtract(...args));
};

const subtractAsync = (...args) =>
  new Promise(
    resolve => {
      setTimeout(() => {
        resolve(subtract(...args));
      }, 500);
    },
    e => console.error(e)
  );

function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

module.exports = { sum, subtract, sumAsync, subtractAsync };
