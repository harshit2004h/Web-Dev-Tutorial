let a=[3,6,2,8,4];
a.forEach((value, index, arr) => {
    console.log(value+"\t"+index+"\t"+arr);
});

let obj={
    a:1, b:2, c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

for (const iterator of a) {
    console.log(iterator);
}