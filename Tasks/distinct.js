// Refactor following solution
// Return an array without duplicates
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const and let, declared variables
// Step 3: Changed naming to CamelCase
"use strict";

const distinct = (data) => {
  const unique = new Set();
  let index = 0;
  data.forEach((x) => {
    if (unique.has(x)) {
      delete data[index];
    } else {
      unique.add(x);
    }
    index++;
  });
  return data.filter((x) => typeof x === "number");
};

module.exports = distinct;
