import { isObject } from './isObject';
import { safeStringify } from './safeStringify';
import { countObjectProperties } from './countObjectProperties';

/** @type {import('../types').CheckAndConvertDebugObject} */
export const checkAndConvertDebugObject = (debug = {}, debugMaxCount = 20) => {
  if (isObject(debug)) {
    const debugObjectFieldsCount = countObjectProperties(debug, {
      maxCount: debugMaxCount,
    });

    // Objects looks too big
    // We need to convert/stringify its fields
    if (debugObjectFieldsCount >= debugMaxCount) {
      return Object.keys(debug).reduce((newDebug, key) => {
        newDebug[key] =
          countObjectProperties(debug[key], { maxCount: debugMaxCount }) >=
            debugMaxCount
              ? safeStringify(debug[key])
              : debug[key];

        return newDebug;
      }, {});
    }
  }

  return debug;
};

/* // For testing purposes
const test = {
  test: {
    test: {
      test1: 1,
      test2: 2,
      test3: 3,
    },
    test2: {
      test1: 1,
      test2: 2,
      test: {
        test: {
          test1: 1,
          test2: 2,
          test3: 3,
        },
        test3: {
          test1: 1,
          test2: 2,
          test: {
            test: {
              test1: 1,
              test2: 2,
              test3: 3,
            },
            test4: {
              test1: 1,
              test2: 2,
              test3: 3,
            },
          },
        },
      },
    },
  },
};

// Simple test with debugMaxCount = 5
console.log(checkAndConvertDebugObject({}));
console.log(checkAndConvertDebugObject({ test: { test: 1 }, test2: { test: 2 }, test3: { test: 3 } }));
console.log(checkAndConvertDebugObject({ test: { test: 1, test1: 2, test2: 3, test4: 5 }, test2: { test: 2 }, test3: { test: 3 } })); */
