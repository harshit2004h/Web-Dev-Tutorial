let a = document.getElementsByClassName("box");
console.log(a);
a[2].style.backgroundColor = "Red";

let b = document.getElementById("box3");
console.log(b);
b.style.backgroundColor = "#284fff";

document.querySelector(".box").style.backgroundColor = "orange"; //For first .box

console.log(document.querySelectorAll(".box")); //returns Array(HTML collection) of elements
// document.querySelectorAll(".box").style.backgroundColor="black"      //GIVES ERROR as it cannot set CSS properties to Array(HTML collection)

document.querySelectorAll(".box").forEach(e=>{
    // console.log(e);
    e.style.backgroundColor="black"
})

console.log(document.getElementsByTagName("div"))