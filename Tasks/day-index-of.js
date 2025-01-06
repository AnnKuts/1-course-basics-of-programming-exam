// Refactor following solution
// Get day number
// Step 0: Used Prettier
// Step 1: Added "use strict"
// Step 2: Added const and let
// Step 3: Changed namings to Camel case
// Step 4: Changed for-loop to indexOf method

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
  const dayIndex = days.indexOf(s);
  return dayIndex >= 0 ? dayIndex + 1 : -1;
};

module.exports = parseDay;
