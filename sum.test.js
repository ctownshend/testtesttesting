const {sum, product} = require ('./sum');

test ('Sum test that 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test ('Product test that 2 + 3 = 6', () => {
  expect(product(2,3)).toBe(6);
});
