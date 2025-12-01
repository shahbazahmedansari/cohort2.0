function whatAmI(val) {
  const valNature = typeof val;
  return `I'm a ${valNature}!`;
}

console.log(whatAmI(25));
console.log(whatAmI("Hello!"));
console.log(whatAmI(true));

function isTruthy(val) {
  if (val) {
    return `It's truthy!`;
  } else {
    return `It's falsey!`;
  }
}

console.log(isTruthy(12));
console.log(isTruthy(0));

function flipBoolean(val) {
  const booleanValue = Boolean(val);
  return !booleanValue;
}

console.log(flipBoolean(undefined));

function stringToNumber(str) {
  const convertedNumber = Number(str);

  if (isNaN(convertedNumber)) {
    return "Not a number";
  } else {
    return convertedNumber;
  }
}

console.log(stringToNumber("Hello"));
console.log(stringToNumber("23"));

