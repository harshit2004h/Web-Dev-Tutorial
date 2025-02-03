/*
Create faulty calculator using JavaScript-
Here- 
+ ---> -
* ---> +
- ---> /
/ ---> **
NOTE->
It perform wrong operation 10% of the times
*/
let ran = Math.floor(Math.random() * 101);

let a = prompt("Enter 1st number");
console.log("Your number is- " + a);

let b = prompt("Enter 2nd number");
console.log("Your number is- " + b);

let c = prompt("Enter operation");
console.log("Your number is- " + c);

if (ran <= 10) {
  if (c == "+") console.log(a - b);
  else if (c == "*") console.log(a + b);
  else if (c == "-") console.log(a / b);
  else if (c == "/") console.log(a ** b);
  else console.log("Invalid Operation");
}
else{
    if (c == "+") console.log(a + b);
  else if (c == "*") console.log(a * b);
  else if (c == "-") console.log(a - b);
  else if (c == "/") console.log(a / b);
  else console.log("Invalid Operation");
}
