const { findTwoSum, findTwoSumImproved } = require("./findTwoSum");

test("if two elements add up to a number", function () {
  expect(findTwoSum([3, 4, 5, 2], 9)).toBeTruthy();
});

test("if two elements add up to a number", function () {
  expect(findTwoSumImproved([3, 4, 5, 2], 9)).toBeTruthy();
});
