const expect = require("../utils/expect");

const str = "Javascript Datastructures";
let result = str.search(/Datastructures/);
expect("str.search(/Datastructures/)", result, 11);

const reg = /\d+/;
expect(`${reg}.test('123')`, reg.test("123"), true);
expect(`${reg}.test('33asd')`, reg.test("33asd"), true);
expect(`${reg}.test('5asdasd')`, reg.test("5asdasd"), true);
expect(`${reg}.test('asdasd')`, reg.test("asdasd"), false);

const reg2 = /^\d+$/;
expect(`${reg2}.test('123')`, reg2.test("123"), true);
expect(`${reg2}.test('33asd')`, reg2.test("33asd"), false);
expect(`${reg2}.test('5asdasd')`, reg2.test("5asdasd"), false);

const floatingNumeral = /^[0-9]*.[0-9]*[1-9]+$/;
expect(`${floatingNumeral}.test('12')`, floatingNumeral.test("12"), false);
expect(`${floatingNumeral}.test('12.2')`, floatingNumeral.test("12.2"), true);

const alphaNumeric = /[a-zA-Z0-9]/;
expect(
  `${alphaNumeric}.test('somethingelse')`,
  alphaNumeric.test("somethingelse"),
  true
);
expect(`${alphaNumeric}.test('hello')`, alphaNumeric.test("hello"), true);
expect(`${alphaNumeric}.test('112a')`, alphaNumeric.test("112a"), true);
