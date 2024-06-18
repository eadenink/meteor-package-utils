/**
 * Simple check that provided object is a real object
 */
/** @type {import('../types').IsObject} */
export const isObject = (obj) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    return true;
  }

  return false;
};
