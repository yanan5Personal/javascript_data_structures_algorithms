const swap = require("./swap");

function selectionSort(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort([6, 1, 23, 4, 2, 3]));
