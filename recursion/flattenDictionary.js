function flattenDictionary(dictionary, innerDictKey, flattenDictParam) {
  debugger;
  let flattenDict = flattenDictParam ?? {};
  for (let key in dictionary) {
    let compositeKey = innerDictKey ? `${innerDictKey}.${key}` : key;
    if (typeof dictionary[key] !== "object") {
      flattenDict[compositeKey] = dictionary[key];
    } else {
      flattenDictionary(dictionary[key], compositeKey, flattenDict);
    }
  }
  return flattenDict;
}

console.log(
  JSON.stringify(
    {
      Key1: "1",
      Key2: {
        a: "2",
        b: "3",
        c: {
          d: "3",
          f: {
            g: "4",
            h: "56",
            i: {
              j: "45",
              k: "55",
            },
          },
          e: "1",
        },
      },
    },
    null,
    2
  )
);
console.log(
  flattenDictionary({
    Key1: "1",
    Key2: {
      a: "2",
      b: "3",
      c: {
        d: "3",
        f: {
          g: "4",
          h: "56",
          i: {
            j: "45",
            k: "55",
          },
        },
        e: "1",
      },
    },
  })
);
