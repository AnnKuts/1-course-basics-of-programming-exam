// Refactor following solution
// Get day number
// Step 0: Used Prettier
// Step 1: Added "use strict"
// Step 2: Added const and let

"use strict";

const D = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const _parse_day_ = (s) => {
  for (let i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
