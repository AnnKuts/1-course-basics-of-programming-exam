// Refactor following solution
// Generate random integer value in given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
"use strict";

Random = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = Random;
