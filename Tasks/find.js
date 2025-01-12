// Refactor following solution
// Find key by value
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
// Step 2: Added const, declared function
// Step 3: Simplified function
// Step 4: Removed empty block
// Step 5: Declared variable
// Step 6: Changed naming
// Step 7: Removed empty block statement
"use strict";

const find = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
