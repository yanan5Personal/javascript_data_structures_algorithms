const expect = require("../utils/expect");

expect('"dog".charAt(0) = d ', "dog".charAt(0), "d");
expect("youtube.substring(1, 2)", "youtube".substring(1, 2), "o");
expect("Youtube.substring(3, 7)", "youtube".substring(3, 7), "tube");
expect("Youtube.substring(1)", "Youtube".substring(1), "outube");
expect("a < b", "a" < "b", true);
expect("add < b", "add" < "b", true);
expect("add < ab", "add" < "ab", false);
expect("'Red Dragon'.indexOf('Red')", "Red Dragon".indexOf("Red"), 0);
expect(
  "'Red Dragon'.indexOf('RedScale')",
  "Red Dragon".indexOf("RedScale"),
  -1
);

var str = "He's my king from this day until his last day";
let pos = str.indexOf("a");
let count = 0;
while (pos !== -1) {
  count++;
  pos = str.indexOf("a", pos + 1);
}
console.log(`count of a in ${str}`, count);
expect("'Red Dragon'", "Red Dragon".startsWith("Red"), true);
expect("'Red Dragon'", "Red Dragon".startsWith("Dragon"), false);
expect("'Red Dragon'", "Red Dragon".endsWith("Dragon"), true);
console.log("chicken,noodle,soup,broth".split(","));
console.log("chicken".split(""));
console.log("Wizard of Oz".replace("Wizard", "Witch"));
