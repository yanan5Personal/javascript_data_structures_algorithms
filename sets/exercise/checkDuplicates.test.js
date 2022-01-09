const { expect } = require("@jest/globals");
const checkDuplicates = require("./checkDuplicates");

test("return true if no duplicates [1,2,3,4]", function () {
  expect(checkDuplicates([1, 2, 3, 4])).toBeFalsy();
});
test("return false if duplicates [1,2,3,4,4]", function () {
  expect(checkDuplicates([1, 2, 3, 3, 4])).toBeTruthy();
});
