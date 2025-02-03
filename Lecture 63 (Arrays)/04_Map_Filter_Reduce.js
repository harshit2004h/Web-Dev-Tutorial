let arr=[1,13,5,7,11];
let newArr= arr.map((e)=>{
    return e**2;
})
console.log(newArr);

const GreaterSeven=(e)=>{
    if(e>7)
        return true;
    return false;
}
console.log(arr.filter(GreaterSeven))

const add=(a,b)=>{
    return a+b;
}
console.log(arr.reduce(add));


console.log(Array.from("HARSHIT"));