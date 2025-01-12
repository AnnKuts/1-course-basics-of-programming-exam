// Refactor following solution
// Return an array without duplicates
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function
// Step 3: Changed naming, switched to CamelCase
// Step 4: Declared and initialized result
// Step 5: Added fill method, simplified function
"use strict";

const duplicate = (value, n) => {
  if (n <= 0) return [];
  return Array(n).fill(value);
};

module.exports = duplicate;
