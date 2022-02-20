const QueueStack = require("./QueueStack");

test("Queue using Stack", function () {
  const stack = new QueueStack();
  stack.push(1);
  stack.push(10);
  stack.push("hundred");
  expect(stack.pop()).toEqual("hundred");
  expect(stack.pop()).toEqual(10);
  expect(stack.pop()).toEqual(1);
});
