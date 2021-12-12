function ExampleClass(sz) {
  let size = sz || 0;
  this.name = "ClassName";
  this.age = 90;

  this.setSize = function (s) {
    size = s;
  };
  this.getSize = function () {
    return size;
  };
}

ExampleClass.prototype.getDetails = function () {
  return this.age + this.name;
};

const ec = new ExampleClass();
console.log(ec.getDetails());
console.log(ec.getSize());

console.log(ec.setSize(23));
console.log(ec.getSize());
