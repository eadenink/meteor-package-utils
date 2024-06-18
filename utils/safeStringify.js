import { stringify } from 'flatted';

// Usage of flatted package fixes any possible circular links
// Which will break regular JSON.stringify method
export const safeStringify = source => {
  try {
    const result = JSON.stringify(source);

    return result;
  } catch (error) {
    console.log(`Can't stringify variable, falling to flatted package`);
  }

  try {
    const result = stringify(source);

    return result;
  } catch (error) {
    console.log(`Can't stringify variable with flatted package`);
  }

  return;
};
