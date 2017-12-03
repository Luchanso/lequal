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

it('check arrays', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];

  const c = [1, 2, 3, 4];
  const d = [1, 2, 3];

  expect(lequal(a, b)).toBeTruthy();
  expect(lequal(c, d)).toBeFalsy();
});

it('check difference prototypes', () => {
  const A = function() { };
  const B = function() { };

  const c = new A();
  const d = new B();

  c.prototype = () => {};

  expect(lequal(c, d)).toBeFalsy();
});

