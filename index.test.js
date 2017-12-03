const lequal = require('./index');

it('check primitives', () => {
  const numberA = 123;
  const numberB = 123;

  const stringA = 'abc';
  const stringB = 'abc';

  const numberC = 123;
  const numberD = 321;

  const stringE = 'abc';
  const stringF = 'cba';

  expect(lequal(numberA, numberB)).toBeTruthy();
  expect(lequal(stringA, stringB)).toBeTruthy();
  expect(lequal(numberC, numberD)).toBeFalsy();
  expect(lequal(stringE, stringF)).toBeFalsy();
});

it('check plain object', () => {
  const a = { c: 123 };
  const b = { c: 123 };

  const c = { c: 123 };
  const d = { c: 124 };

  expect(lequal(a, b)).toBeTruthy();
  expect(lequal(c, d)).toBeFalsy();
});

it('check nested object', () => {
  const a = { c: { d: 123 } };
  const b = { c: { d: 123 } };

  const d = { c: { d: 123 } };
  const e = { c: { d: 124 } };

  expect(lequal(a, b, true)).toBeTruthy();
  expect(lequal(a, b)).toBeFalsy();
  expect(lequal(d, e, true)).toBeFalsy();
  expect(lequal(d, e)).toBeFalsy();
});

it('check difference nested object', () => {
  const a = { c: { d: 123 } };
  const b = { c: { e: 123 } };

  const c = { c: { d: 123 } };
  const d = { c: 123 };

  expect(lequal(a, b, true)).toBeFalsy();
  expect(lequal(a, b)).toBeFalsy();
  expect(lequal(c, d, true)).toBeFalsy();
  expect(lequal(c, d)).toBeFalsy();
});


// lequal(a, b); // true
// lequal({ c: 321 }, b); // false

// const nestedObj1 = { a: { b: 123 } }
// const nestedObj2 = { a: { b: 321 } }

// const isDeepEqual = true;

// lequal(nestedObj1, nestedObj2, isDeepEqual); // true

