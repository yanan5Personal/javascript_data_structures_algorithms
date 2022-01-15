const sqrtIntNaive = require("./sqrIntNaive");

test("return the squaroot of the given number", () => {
  expect(sqrtIntNaive(16)).toEqual(4);
});
