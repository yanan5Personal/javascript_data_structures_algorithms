const swap = require("./swap");

function insertion(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let value = arr[i];
    let j;
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertion([6, 1, 23, 4, 2, 3]));
