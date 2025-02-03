document.body.firstElementChild     //Only Elements
document.body.firstChild            //With Text, Elements and comment
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[3]

let cont=document.body.firstChild
cont.parentElement                  //Shows Parent Element

document.body.firstElementChild.children[3].nextElementSibling      //Gives next sibling of box-4 i.e. box-5
document.body.firstElementChild.children[3].previousElementSibling  //Gives previous sibling of box-4 i.e. box-3

document.body.firstElementChild.children[3].previousSibling         //Gives text node 