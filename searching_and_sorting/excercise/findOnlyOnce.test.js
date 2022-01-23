const findOnlyOnceHelper = require("./findOnlyOnce");

test("return only occurance in sorted array", function () {
  expect(findOnlyOnceHelper([1, 1, 2, 4, 4, 5, 5, 6, 6])).toEqual(2);
});
