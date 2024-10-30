
const subtract = require('./subtract')

test("subtract 4 - 3 to be equal 1", ()=> {
  expect(subtract(4,3)).toBe(1);
});