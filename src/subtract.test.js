
const subtract = require('./subtract')

test("subtract 6 - 5 to be equal 1", ()=> {
  expect(subtract(6,5)).toBe(1);
});