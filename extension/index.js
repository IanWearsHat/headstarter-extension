function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goodLuck() {
  if (getRandomInteger(1, 100) == getRandomInteger(1, 100)) {
    throw Error("You asked for this");
  }
}

module.exports = goodLuck;
