function filterNumbers(arr) {
  const newArr = arr.filter(val => typeof val === "number");
  return newArr;
}

console.log(filterNumbers([23, "Hello", 45, true]));

function reverseArray(arr) {
  const reverseArr = arr.reverse();
  return reverseArr;
}

console.log(reverseArray([4, 5, 6, 7]));

function findMax(arr) {
  const maximumNumber = Math.max(...arr);
  return maximumNumber;
}

console.log(findMax([12, 23, 45]));

function removeDuplicates(arr) {
  const newArr = [];
  arr.forEach(val => {
    if (newArr.includes(val)) return;
    newArr.push(val);
  });
  return newArr;
}

console.log(removeDuplicates([12, 23, 12]));

function flattenArray(arr) {
  const newArr = arr.flat(2);
  return newArr;
}

console.log(flattenArray([0, 1, [2, [3, [4, 5]]]]));




