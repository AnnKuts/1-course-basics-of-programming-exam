// Refactor following solution
// Return an array without duplicates
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function
// Step 3: Changed naming, switched to CamelCase
"use strict";

const duplicate = (value, n) => {
  if (n <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < n; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
