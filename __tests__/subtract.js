import subtract from '../subtract';

test('subtracts two numbers', () => {
  const result = subtract(2, 1);
  expect(result).toBe(1);
});
