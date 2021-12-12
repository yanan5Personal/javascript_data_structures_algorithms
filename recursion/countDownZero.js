function countDownZero(n) {
  if (n < 0) {
    return;
  }
  console.log(n);
  return countDownZero(n - 1);
}

countDownZero(10);
