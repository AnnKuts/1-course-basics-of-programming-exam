// Refactor following solution
// Generate int array from given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function, used destructuring
// Step 3: Changed naming, switched to CamelCase
// Step 4: Declared and initialized result
// Step 5: Added push() method

"use strict";

const range = (...range) => {
  const [from, to] = range;
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

module.exports = range;
