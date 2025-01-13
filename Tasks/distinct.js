// Refactor following solution
// Return an array without duplicates
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const and let, declared variables
"use strict";

const DISTINCT = (data) => {
  const A = new Set();
  let w = 0;
  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
    w++;
  });
  return data.filter((x) => typeof x === "number");
};

module.exports = DISTINCT;
