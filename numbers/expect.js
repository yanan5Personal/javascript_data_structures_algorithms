function expect(check, actual, expected) {
  if (actual === expected) {
    console.log(check + "Pass");
  } else {
    console.log(check + "Fail");
  }
}

module.exports = expect;
