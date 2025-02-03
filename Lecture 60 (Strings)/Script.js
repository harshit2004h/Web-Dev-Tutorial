let a="HARSHIT SRIVASTAVA";
console.log(a[8]);
console.log(a[50]);             //Doesn't give error just return UNDEFINED
console.log(a.charAt(8));
console.log(a.charAt(50));      //Gives nothing

console.log("Length is- "+a.length);    //Here length is without parenthesis
let Name="Harshit";
let Surname="Srivastava";
console.log(`His name is ${Name} and surname is ${Surname}`);       //This is String Interpolation

console.log(a.slice(4));
console.log(a.slice(4,12));
console.log(a.slice());

console.log(a.replace("HARSHIT","AVANTIKA"));
console.log(a);         //No change in 'a' due to replace and slice

console.log(a.concat("bbfsf"," ","fsngh"));     //Concat can concatenate multiple Strings
console.log(a);         //Still No Change b'coz String is immutable
