function commonElements(arr) {
  let resultHash = {};
  let result = [];
  for (let i = 0, arrayLen = arr.length; i < arrayLen; i++) {
    let innerArr = arr[i];
    let last = null;
    for (let j = 0, innerArrLen = innerArr.length; j < innerArrLen; j++) {
      let ele = innerArr[j];
      if (ele !== last) {
        if (resultHash[ele] !== undefined) {
          resultHash[ele] += 1;
        } else {
          resultHash[ele] = 1;
        }
      }
      last = ele;
    }
  }
  for (let prop in resultHash) {
    if (resultHash[prop] === arr.length) {
      result.push(parseInt(prop));
    }
  }
  return result;
}

console.log(
  "commonElements([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]); // [ 1, 2 ]",
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
); // [ 1, 2 ]

console.log(
  "commonElements([[1, 5, 5, 10],[3, 4, 5, 5, 10],[5, 5, 10, 20]]); // [ 1, 2 ]",
  commonElements([
    [1, 5, 5, 10],
    [3, 4, 5, 5, 10],
    [5, 5, 10, 20],
  ])
); // [ 1, 2 ]
