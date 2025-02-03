import fs from "fs/promises"
let a =await fs.readFile("abc.txt")
let b= await fs.appendFile("abc.txt", " This is amazing promise.")
console.log(a.toString());
