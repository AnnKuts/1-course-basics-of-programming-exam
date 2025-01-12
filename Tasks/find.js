// Refactor following solution
// Find key by value
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const, declared function
// Step 3: Simplified function
// Step 4: Removed empty block
// Step 5: Declared variable
// Step 6: Changed naming
// Step 7: Removed empty block statement
// Step 8: Removed unnecessary push method and magic number
// Step 9: Removed unnecessary if-statements
// Step 10: Everything works fine, but we should avoid for...in, so changed it with for...of, used destructuring and Object.entries() method
// Step 11: Changed naming again to make it more readable
"use strict";

const findKey = (object, value) => {
  for (const [key, objectValue] of Object.entries(object)) {
    if (objectValue === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
