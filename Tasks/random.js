// Refactor following solution
// Generate random integer value in given range
// Step 0: Used Prettier and ESLint
// Step 1: Added "use strict"
// Step 2: Added const
// Step 3: Simplified function, used DRY principle

"use strict";

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = random;
