const multiply = require('./multiply')

test("multiply 3 * 2 to be equal 6", ()=> {
  expect(multiply(3,2)).toBe(6);
});