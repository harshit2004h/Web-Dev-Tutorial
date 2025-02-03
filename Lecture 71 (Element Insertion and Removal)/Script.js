console.log(document.querySelector(".box").innerHTML);                  //to get Inner HTML (TEXT)
console.log(document.querySelector(".container").innerHTML);            //to get Inner HTML (TEXT)

console.log(document.querySelector(".container").outerHTML);            //All HTML inside + container itself
console.log(document.querySelector(".container").tagName);              //Gives Tag name i.e.  DIV (For Element node only)
console.log(document.querySelector(".container").nodeName);             //Applicable for all node (text, comment)

console.log(document.querySelector(".container").textContent);          //Gives text Content only (Minus Tags)
console.log(document.querySelector(".container").hidden);               //Shows if container is hidden or not
console.log(document.querySelector(".hide").hidden=false);              //Makes hidden block Visible

document.querySelector(".box").innerHTML="Hey I am harshit";            //Changes Inner HTML
console.log(document.querySelector(".hide").hasAttribute("style"));     //Only for Inline CSS (Checks if has attribute "style")
console.log(document.querySelector(".hide").getAttribute("style"));     //Shows the attribute

console.log(document.querySelector(".hide").attributes)                 //Gives all attributes
document.querySelector(".hide").removeAttribute("style")                //Removes style attribute
console.log(document.querySelector(".box").dataset);                    //Gives the data Set used

document.querySelector(".hide").setAttribute("style", "color: darkgreen")   //Changes Attribute
// document.designMode="on";            //Turns on the design mode and changes can be made to any website

//Element Insertion
let div=document.createElement("div");                                  //Creating new div
div.innerHTML="This is a new div <b>By Harshit</b>";                    //Adding text in div
div.setAttribute("class","new");                                        //Setting classname
document.querySelector(".container").append(div);                       //Adds element at the end of container
// document.querySelector(".container").prepend(div);                      //Adds element at the start of container
// document.querySelector(".container").before(div);                       //Adds element before container
// document.querySelector(".container").after(div);                        //Adds element aftercontainer
// document.querySelector(".new").replaceWith(div2);                       //Replaces the div with div2

//Another method of inserting
document.querySelector(".container").insertAdjacentHTML("beforebegin", "<b>This is another method of inserting beforebegin</b>");
document.querySelector(".container").insertAdjacentHTML("afterbegin", "<b>This is another method of inserting afterbegin</b>");
document.querySelector(".container").insertAdjacentHTML("beforeend", "<b>This is another method of inserting beforeend</b>");
document.querySelector(".container").insertAdjacentHTML("afterend", "<b>This is another method of inserting afterend</b>");

document.querySelector(".container").classList.add("Another");          //Adds class
console.log(document.querySelector(".container").classList);            //Gives all class as list
document.querySelector(".container").classList.remove("Another");       //Removes class
console.log(document.querySelector(".container").className);            //Gives all class names
document.querySelector(".container").classList.toggle("Another");       //Toggles (if present then remove, if absent then add)
console.log(document.querySelector(".container").className);            //Gives all class names