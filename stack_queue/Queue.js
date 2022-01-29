function Queue(array) {
	this.array = array ? array : [];
}

Queue.prototype.enqueue = function enqueue(ele) {
	return this.array.push(ele);
};
Queue.prototype.dequeue = function dequeue() {
	return this.array.shift();
};
Queue.prototype.getBuffer = function getBuffer() {
	return this.array.slice();
};
Queue.prototype.isEmpty = function isEmpty() {
	return this.array.length === 0;
};
Queue.prototype.peek = function peek() {
	return this.array[0];
};
function queueAccessNthTopNode(queue, n) {
	if (n <= 0) throw "error";
	const bufferedArray = queue.getBuffer();
	const bufferedQueue = new Queue(bufferedArray);

	while (--n !== 0) {
		bufferedQueue.dequeue();
	}
	return bufferedQueue.dequeue();
	// return bufferedArray[n-1]
}
function queueSearch(queue, ele) {
	const bufferedArray = queue.getBuffer();
	const bufferedQueue = new Queue(bufferedArray);
	while (!bufferedQueue.isEmpty()) {
		if (bufferedQueue.dequeue() === ele) {
			return true;
		}
	}
	return false;
}
var queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log(queue1); // {array: [1,2,3]}
queue1.dequeue();
console.log(queue1); // {array: [2,3]}
queue1.dequeue();
console.log(queue1); // {array: [3]}
