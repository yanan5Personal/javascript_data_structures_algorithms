function swap(arrStr, index1, index2) {
  const temp = arrStr[index1];
  arrStr[index1] = arrStr[index2];
  arrStr[index2] = temp;
}

function permute(strArr, begin, end) {
  debugger;
  if (begin === end) {
    console.log(strArr);
  } else {
    for (let i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
}

function permuteArr(strArr) {
  permute(strArr, 0, strArr.length - 1);
}

permuteArr(["A", "B", "C"]);
