let button= document.querySelector(".btn");

button.addEventListener("dblclick",(e)=>{
    document.querySelector(".box").innerHTML="<b>This is a clicked Box</b>"
    console.log(e);
} )
button.addEventListener("contextmenu",(e)=>{
    alert("Right Click Done")
    console.log(e);
} )
button.addEventListener("keydown",(e)=>{
    console.log(e);
    console.log(e.key, e.code)
} )