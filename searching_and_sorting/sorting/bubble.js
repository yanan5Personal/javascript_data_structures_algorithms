const swap = require("./swap");

function bubbleSort(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
