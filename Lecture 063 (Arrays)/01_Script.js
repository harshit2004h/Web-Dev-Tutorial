let arr = [1, 2, 4, 5, 7, 9];
console.log(arr);
console.log(arr.length);

console.log(arr.toString() + "\t\t\t-" + typeof arr.toString()); //Changes Array to string separated by commas
console.log(arr.join(" and ") + "\t-" + typeof arr.join(" and ")); //Changes Array to string separates by whatever is written inside fnc

arr.pop();
console.log(arr); //Pops the last element from Array

arr.push(100);
console.log(arr.push("Harshit")); //Retuns the updated length of the Array
console.log(arr);

console.log(arr.shift()); //Removes the first element from the array and returns it
console.log(arr);

console.log(arr.unshift("3")); //It adds element in the front and returns the size of updated array
console.log(arr);

delete arr[5]; //Deletes element but the size is not changed (LENGTH REMAINS SAME)
console.log(arr);

let a1 = [3, 2, 1];
let a2 = [6, 5, 4];
let a3 = [9, 8, 7];
console.log(a1.concat(a3, a2, a2));
console.log(a1); //Original Array 'a1' is not changed

let a4 = a1.concat(a3, a2, a2);
console.log(a4.sort()); //Returns the sorted array and also modifies the original array
console.log(a4);
