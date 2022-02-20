const wordCounter = require("./wordCounter");

test("return the squaroot of the given number", () => {
  const result = wordCounter(
    "practice makes perfect. get perfect by practice. just practice."
  );
  expect(Object.keys(result)).toHaveLength(6);
});
