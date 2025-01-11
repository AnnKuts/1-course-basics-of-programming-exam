// Refactor following solution
// Generate int array from given range
// Step 0: Used eslint and prettier
// Step 1: Added "use strict"
"use strict";

_range = (...Range) => {
  let [from, to] = Range;
  if (to >= from) {
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      Range[i - from] = i;
    }
  } else {
    return [];
  }
  return Range;
};

module.exports = _range;
