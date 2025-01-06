// Refactor following solution
// Get day number
// Step 0: Used Prettier
// Step 1: Added "use strict"
// Step 2: Added const and let
// Step 3: Changed namings to Camel case
// Step 4: Changed for-loop

"use strict";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const parseDay = (s) => {
  for (let i = 0; i < days.length; i++) {
    if (s.startsWith(days[i])) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
