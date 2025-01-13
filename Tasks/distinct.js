// Refactor following solution
// Return an array without duplicates
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const and let, declared variables
// Step 3: Changed naming to CamelCase
// Step 4: Used for...of instead of forEach, avoid using forEach and delete, removed unnecessary filter, changed data to array, so made it more readable
// Step 5: Everything works fine, but we can optimize this code even more by just creating a Set of array and return it
"use strict";

const distinct = (array) => {
  const unique = new Set(array);
  return [...unique];
};

module.exports = distinct;
