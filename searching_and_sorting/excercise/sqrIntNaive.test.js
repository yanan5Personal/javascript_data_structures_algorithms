const { sqrtIntNaive, sqrtIntBinary } = require("./sqrIntNaive");

test("return the squaroot of the given number", () => {
  expect(sqrtIntNaive(16)).toEqual(4);
});

test("return the squaroot of the given number", () => {
  expect(sqrtIntBinary(16)).toEqual(4);
});
