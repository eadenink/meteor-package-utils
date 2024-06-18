/**
 * Adds a delay. Useful when need to pause some async operations execution
 */
/** @type {import('../types').AsyncDelay} */
export const asyncDelay = (delayMillis) => {
  return new Promise(resolve => {
    setTimeout(resolve, delayMillis);
  });
};
