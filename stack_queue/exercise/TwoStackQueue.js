const Stack = require("../stack");
function TwoStackQueue() {
  this.stackOne = new Stack();
  this.stackTwo = new Stack();
}
TwoStackQueue.prototype.enqueue = function (val) {
  this.stackOne.push(val);
};
TwoStackQueue.prototype.dequeue = function () {
  while (!this.stackOne.isEmpty()) {
    this.stackTwo.push(this.stackOne.pop());
  }
  return this.stackTwo.pop();
};
module.exports = TwoStackQueue;
