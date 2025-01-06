// Refactor following solution
// Get day number
// Step 0: Used Prettier
// Step 1: Added "use strict"
"use strict";

let D = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

_parse_day_ = (s) => {
  let i;
  for (i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
