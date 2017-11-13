# lequal

Without dependencies

install:
```
npm install lequeal
# or: yarn add lequeal
```

usage:
```
const lequeal = require('lequeal');
// or: import lequeal from 'lequeal';

const a = { c: 123 };
const b = { c: 123 };

lequeal(a, b); // true
lequeal({ c: 321 }, b); // false

const nestedObj1 = { a: { b: 123 } }
const nestedObj2 = { a: { b: 321 } }

const isDeepEqual = true;

lequeal(nestedObj1, nestedObj2, isDeepEqual); // true

```
