// Refactor following solution
// Generate int array from given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function
// Step 3: Changed naming, switched to CamelCase
"use strict";

const range = (...range) => {
  const [from, to] = range;
  if (to >= from) {
    range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = range;
