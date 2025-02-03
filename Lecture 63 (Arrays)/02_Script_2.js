let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.splice(1, 3, 45, 46, 47, 48)); //Modifies the array and returns deleted elements
console.log(num);

let n = [1, 2, 3, 5, 4, 6];
console.log(n.slice(1, 3)); //Slices from 1 to 3 [1- Included, 3- Excluded(so less than 3 i.e. 2)]
console.log(n.slice(3));
console.log(n); //Does not changes

console.log(n.reverse()); //Reverse the array and returns it
console.log(n); //IT ALSO CHANGES
