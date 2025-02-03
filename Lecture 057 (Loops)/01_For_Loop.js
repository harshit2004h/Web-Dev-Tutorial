for(let i=1; i<=10; i++)
    console.log(i);
let obj={
    name: "Harshit",
    role: "Coder",
    company: "Microsoft"
}

for (const key in obj) {
    const element=obj[key];
    console.log(key, element);
}

for (const iterator of "Harshit") {
    console.log(iterator);
}