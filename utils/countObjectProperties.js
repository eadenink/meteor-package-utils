import { isObject } from './isObject';

// Recursively counts the number of properties (or fields) within a given JavaScript object (obj)
// The function may be written better because right now it doesn't return the proper number (stops early)
// Need to add param like stopOnExceed and return maxCount + 1
/** @type {import('../types').CountObjectProperties} */
export const countObjectProperties = (obj, { maxCount = 2 } = {}) => {
  let fieldsNumber = 0;

  const countObjectFieldsNumber = obj => {
    fieldsNumber += 1;

    // Stop calculations
    if (maxCount > 0 && fieldsNumber >= maxCount) {
      // Need to add 1 to end up with correct number on return later
      return maxCount + 1;
    }

    if (isObject(obj)) {
      Object.keys(obj).map(key => countObjectFieldsNumber(obj[key]));
    }
  };

  countObjectFieldsNumber(obj);

  return fieldsNumber > 0 ? fieldsNumber - 1 : 0;
};
