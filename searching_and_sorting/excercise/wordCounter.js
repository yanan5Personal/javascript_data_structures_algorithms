function wordCounter(sentence) {
  let sent = sentence.replace(/[.]/g, "").split(" ");

  return Object.fromEntries(
    Object.entries(
      sent.reduce((prev, curr) => {
        if (!prev[curr]) {
          prev[curr] = 1;
        } else {
          prev[curr]++;
        }
        return prev;
      }, {})
    ).sort((a, b) => b[1] - a[1])
  );
}
console.log(
  "practice makes perfect. get perfect by practice. just practice.",
  wordCounter("practice makes perfect. get perfect by practice. just practice.")
);
module.exports = wordCounter;
