const fs = require("fs");
// console.log(fs);

// const fs =require("fs/promises")    //For using Promises and not CallBack Hell
//CallBack Hell
console.log("Start");
fs.writeFileSync("abc.txt", "This is a text file."); //This is Synchronous i.e. Further lines are not executed till it is done
let a=fs.writeFile("abc2.txt","This is another text file Lorem ipsum dolor smenda.",()=>{ //For Asynchronous
    console.log("Done");
    fs.readFile("abc2.txt",(error, data)=>{
        console.log(error, data.toString());
    })  
})

fs.appendFile("abc.txt"," This is an appended text",(error ,data)=>{
    console.log(data);
})
console.log("Ending");
