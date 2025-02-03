let boxes= document.getElementsByClassName("box");
console.log(boxes);

function getRandom()
{
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    return`rgb(${a},${b},${c})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandom();
})