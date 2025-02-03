function names(n) {
  console.log("Hi, " + n);
}
names("Harshit");
names("Avantika");

function SUM(a, b, c = 3) {
  let sum = a + b + c;
  return sum;
}

let result = SUM(9, 5);
console.log("Sum is- " + result);

let result1 = SUM(9, 5, 6);
console.log("Sum 2 is- " + result1);

const func1 = (x) => {
  console.log("I am an Arrow Function- " + x);
}
func1(34);
func1(56);