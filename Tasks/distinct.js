// Refactor following solution
// Return an array without duplicates
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const and let, declared variables
// Step 3: Changed naming to CamelCase
// Step 4: Used for...of instead of forEach, avoid using forEach and delete, removed unnecessary filter, changed data to array, so made it more readable
"use strict";

const distinct = (array) => {
  const unique = new Set();
  for (const item of array) {
    if (!unique.has(item)) {
      unique.add(item);
    }
  }
  return [...unique];
};

module.exports = distinct;
