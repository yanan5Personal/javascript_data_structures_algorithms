function sortByLength(a, b) {
  return a.length - b.length;
}
function sortByFirstOccOfA(a, b) {
  return a.indexOf("a") - b.indexOf("a");
}
function sortByNumOfProperties(obj1, obj2) {
  return Object.keys(obj1).length - Object.keys(obj2).length;
}
let mythical = ["dragon", "slayer", "magic", "wizard of oz", "ned stark"];
console.log(mythical);
console.log(mythical.sort(sortByLength));
console.log(mythical.sort(sortByFirstOccOfA));
let mythicalObjects = [
  { prop1: "", prop2: "" },
  { prop1: "", prop2: "", prop3: "" },
  { prop1: "", prop2: "" },
];
console.log(mythicalObjects);
console.log(mythicalObjects.sort(sortByNumOfProperties));
