const isParenthesisValid = require("./isParenthesisValid");

test('isParenthesisValid("((()"); return false;', function () {
  expect(isParenthesisValid("((()")).toBeFalsy();
});
test('isParenthesisValid("(((("); return false;', function () {
  expect(isParenthesisValid("((((")).toBeFalsy();
});
test('isParenthesisValid("()()"); return true;', function () {
  expect(isParenthesisValid("()()")).toBeTruthy();
});
test('isParenthesisValid("((()))"); return true;', function () {
  expect(isParenthesisValid("((()))")).toBeTruthy();
});
test('isParenthesisValid("((())))"); return false;', function () {
  expect(isParenthesisValid("((())))")).toBeFalsy();
});
