const { sumAsync, subtractAsync } = require("./math");

let result, expected;

test("sum adds numbers", async () => {
  result = await sumAsync(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  result = await subtractAsync(3, 7);

  expected = -4;
  expect(result).toBe(expected);
});

// a test

// async function test(title, callback) {
//   try {
//     await callback();
//     console.log(`✓ ${title}`);
//   } catch (error) {
//     console.error(`✕ ${title}`);
//     console.error(error);
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(
//           `\n actual: ${actual} \n expected: ${expected} \n result is not equal to expected.`
//         );
//       }
//     },
//     toEqual(expected) {
//       if (actual !== expected) {
//         throw new Error(
//           `\n actual: ${actual} \n expected: ${expected} \n result is not equal to expected.`
//         );
//       }
//     },
//     toBeGreaterThan(expected) {
//       if (actual <= expected) {
//         throw new Error(
//           `\n actual: ${actual} \n expected: ${expected} \n result is not greater than expected.`
//         );
//       }
//     }
//   };
// }
