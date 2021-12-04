let array = ["Arul", "Malar", "Ilamaran", "Shobana", "Ramaswamy"];

console.log("--------------------------for---------------------------");
for (let i = 0, len = array.length; i < len; i++) console.log(array[i]);
console.log("--------------------------for in------------------------");
for (let i in array) console.log(array[i]);
console.log("--------------------------for of------------------------");
for (let i of array) console.log(i);
console.log("--------------------------while-------------------------");
let whileI = 0;
while (whileI < array.length) {
  console.log(array[whileI]);
  whileI++;
}
console.log("--------------------------while infinite-----------------");
let whileInfinite = 0;
while (true) {
  if (whileInfinite >= array.length) break;
  console.log(array[whileInfinite]);
  whileInfinite++;
}
console.log("--------------------------for infinite-------------------");
let forInfinite = 0;
for (;;) {
  if (forInfinite >= array.length) break;
  console.log(array[forInfinite]);
  forInfinite++;
}
console.log("--------------------------for each------------------------");
array.forEach(console.log);
console.log("--------------------------slice(2,4)----------------------");
console.log(array.slice(2, 4), array);
console.log("--------------------------slice(1,2)----------------------");
console.log(array.slice(1, 2), array);
console.log("--------------------------slice(3)------------------------");
console.log(array.slice(3), array);
console.log("--------------------------slice(0,3)----------------------");
console.log(array.slice(0, 3), array);
console.log(
  "--------------------------splice(2,3,'Badri')----------------------"
);
console.log("--------------------------array.concat()------------------------");
console.log(array, array.concat());
console.log(
  "--------------------------array.concat(['one', 2, 3])------------------------"
);
console.log(array, array.concat(["one", 2, 3]));
