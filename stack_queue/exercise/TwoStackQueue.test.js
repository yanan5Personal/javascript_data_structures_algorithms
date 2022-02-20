const TwoStackQueue = require("./TwoStackQueue");

test("Queue using Stack", function () {
  const queue = new TwoStackQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue("three");
  expect(queue.dequeue()).toEqual(1);
  expect(queue.dequeue()).toEqual(2);
  expect(queue.dequeue()).toEqual("three");
});
