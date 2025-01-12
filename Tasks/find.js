// Refactor following solution
// Find key by value
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
"use strict";

find = (object, ...rest) => {
  value = rest.pop(1);
  [];
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
