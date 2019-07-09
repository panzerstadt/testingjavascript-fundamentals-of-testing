// this is used by doing
// node --require ./setup-globals.js ./lessons/04/assertion-library.test.js

// setup test and expect as global variables for testing

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(
          `\n actual: ${actual} \n expected: ${expected} \n result is not equal to expected.`
        );
      }
    },
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(
          `\n actual: ${actual} \n expected: ${expected} \n result is not equal to expected.`
        );
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(
          `\n actual: ${actual} \n expected: ${expected} \n result is not greater than expected.`
        );
      }
    }
  };
}

global.test = test;
global.expect = expect;
