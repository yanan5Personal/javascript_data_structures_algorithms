function HashTable(size) {
  this.size = size;
  this.keys = Array(size).fill(null);
  this.values = Array(size).fill(null);
  this.limit = 0;
}

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) return "Hash table full";
  let hashIndex = this.hash(key);
  let squareIndex = 1;
  while (this.keys[hashIndex] !== null) {
    hashIndex = Math.pow(squareIndex, 2);
    hashIndex = hashIndex % this.size;
    squareIndex++;
  }

  this.keys[hashIndex] = key;
  this.values[hashIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  let hashIndex = this.hash(key);
  let squareIndex = 1;
  while (this.keys[hashIndex] !== key) {
    hashIndex = Math.pow(squareIndex, 2);
    hashIndex = hashIndex % this.size;
    squareIndex++;
  }
  return this.values[hashIndex];
};

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

console.log("exampletable", exampletable);
