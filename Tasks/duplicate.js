// Refactor following solution
// Return an array without duplicates
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function
"use strict";

const duplicate = (value, N) => {
  if (N <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < N; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
