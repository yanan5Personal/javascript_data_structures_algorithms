const uniqueList = require("./uniqueList");
// 7 uniqueList([1,2],[3,4,5]); // [1,2,3,4,5]
// 8 uniqueList([],[2,2,3,4,5]); //
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr2.sort();
  arr1.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

test("remove duplicate and return unique list combining both", function () {
  const list1 = [1, 1, 2, 2];
  const list2 = [2, 3, 4, 5];
  const unique = [1, 2, 3, 4, 5];
  const result = uniqueList(list1, list2);
  expect(isArrayEqual(result, unique)).toBeTruthy();
});

test("return true for [1,2] and [3,4,5]", function () {
  const list1 = [1, 2];
  const list2 = [3, 4, 5];
  const unique = [1, 2, 3, 4, 5];
  const result = uniqueList(list1, list2);
  expect(isArrayEqual(result, unique)).toBeTruthy();
});

test("return true for [] and [2,2,3,4,5]", function () {
  const list1 = [];
  const list2 = [2, 2, 3, 4, 5];
  const unique = [2, 3, 4, 5];
  const result = uniqueList(list1, list2);
  expect(isArrayEqual(result, unique)).toBeTruthy();
});
