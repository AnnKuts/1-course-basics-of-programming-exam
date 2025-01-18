// Refactor following solution
// Generate int array from given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function, used destructuring
// Step 3: Changed naming, switched to CamelCase
// Step 4: Declared and initialized result
// Step 5: Added push() method

"use strict";

const range = (from, to) => {
  if (to <= from) return [];
  const result = new Array(to - from + 1);
  for (let i = from; i <= to; i++) {
    result[i - from] = i;
  }
  return result;
};

module.exports = range;
