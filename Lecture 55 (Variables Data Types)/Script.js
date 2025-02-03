console.log("This is JS variables and data types videos");

var a = 5;
var b = 4;
var c = "Harry";
console.log(a + b + c);
console.log(c + a + b);

console.log(typeof a + "\t" + typeof c);

let d = 45; //Use let because it is follows variable scope
const str = "HARSHIT"; //It is constant and cannot be changed
var e = 56; //Same as Global Variable

let p = "Harshit";
let q = 22;
let r = 3.55;
let s = true;
let t = undefined;
let u = null;
console.log(p, q, r, s, t, u);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u);

let o = {
  //Object Creation
  name: "Harshit", //Here name is without space so double quotes are not necessary
  "job code": 23105083, //job code is with space so double quotes are necessary
  is_handsome: true,
};
console.log(o);
o.salary = "100 crores";
console.log(o);
