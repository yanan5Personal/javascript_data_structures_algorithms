const Queue = require("../Queue");
function QueueStack() {
  this.queueOne = new Queue();
}
QueueStack.prototype.push = function (val) {
  this.queueOne.enqueue(val);
};
QueueStack.prototype.pop = function () {
  var size = this.queueOne.array.length - 1;
  var counter = 0;
  var bufferQueue = new Queue();
  while (++counter <= size) {
    bufferQueue.enqueue(this.queueOne.dequeue());
  }
  console.log(bufferQueue, this.queueOne);
  var popped = this.queueOne.dequeue();
  this.queueOne = bufferQueue;
  return popped;
};
module.exports = QueueStack;
