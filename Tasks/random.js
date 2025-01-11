// Refactor following solution
// Generate random integer value in given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const
// Step 3: Simplified function
"use strict";

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = random;
