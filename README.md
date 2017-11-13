# lequal

Without dependencies

install:
```
npm install lequal
# or: yarn add lequal
```

usage:
```
const lequal = require('lequal');
// or: import lequeal from 'lequal';

const a = { c: 123 };
const b = { c: 123 };

lequal(a, b); // true
lequal({ c: 321 }, b); // false

const nestedObj1 = { a: { b: 123 } }
const nestedObj2 = { a: { b: 321 } }

const isDeepEqual = true;

lequal(nestedObj1, nestedObj2, isDeepEqual); // true

```
