/*
Adjectives- Crazy, Amazing, Fire
Shop- Cars, Food, Garments
Another Word- Bros, Limited, Hub
*/    
let Name="";

let ran=Math.floor(Math.random()*4);
if(ran==1) Name=Name+"Crazy ";
else if(ran==2) Name=Name+"Amazing ";
else Name=Name+"Fire ";

ran=Math.floor(Math.random()*4);
if(ran==1) Name=Name+"Cars ";
else if(ran==2) Name=Name+"Food ";
else Name=Name+"Garments ";

ran=Math.floor(Math.random()*4);
if(ran==1) Name=Name+"Bros ";
else if(ran==2) Name=Name+"Limited ";
else Name=Name+"Hub ";

console.log(Name);