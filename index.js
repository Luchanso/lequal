function isEqual(objA, objB, deep = false) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  if (objA.prototype !== objB.prototype) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const bHasOwnProperty = hasOwnProperty.bind(objB);
  while (keysA.length > 0) {
    const key = keysA.pop();

    if (!bHasOwnProperty(key)) {
      return false;
    }

    const a = objA[key];
    const b = objB[key];

    if (!Object.is(a, b)) {
      if (
        !deep ||
        typeof a !== "object" ||
        typeof b !== "object" ||
        a === null ||
        b === null
      ) {
        return false;
      }

      if (!isEqual(a, b, deep)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isEqual;
