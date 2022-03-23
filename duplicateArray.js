const arr1 = [1, 2, 3, 4];

const arr2 = [...arr1];
console.log("Before pushing arr1 ", arr1, " arr2 ", arr2);

arr1.push(5);

console.log("After pushing arr1 ", arr1, " arr2 ", arr2);
