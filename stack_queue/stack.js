function Stack(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}
Stack.prototype.getBuffer = function getBuffer() {
  return this.array.slice();
};
Stack.prototype.isEmpty = function isEmpty() {
  return this.array.length === 0;
};
Stack.prototype.peek = function peek() {
  return this.array[this.array.length - 1];
};
Stack.prototype.push = function push(ele) {
  this.array.push(ele);
};
Stack.prototype.pop = function pop() {
  return this.array.pop();
};
function stackAccessNthTopNode(stack, n) {
  var bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";
  // var bufferStack = new Stack(bufferArray);
  // while (--n !== 0) {
  // 	bufferStack.pop();
  // }
  // return bufferStack.pop();
  return bufferArray[bufferArray.length - n];
}
function stackSearch(stack, ele) {
  let bufferArray = stack.getBuffer();
  const bufferStack = new Stack(bufferArray);
  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === ele) return true;
  }
  return false;
}
module.exports = Stack;

let stack1 = new Stack();
stack1.push(10);
stack1.push(5);
console.log(stack1);
console.log(stack1.peek());
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.peek());
var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log("------------------------------");
console.log(stack2);
console.log(stackAccessNthTopNode(stack2, 4));
