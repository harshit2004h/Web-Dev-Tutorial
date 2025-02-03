console.log("Harshit is a hacker"); //This is a synchronous action
console.log("Rohan is a hecker"); //This is a synchronous action

setTimeout(() => {
  //This is a Asynchronous Action so it is run at the end (EVEN WITH 0 DELAY)
  console.log("This is under TimeOut");
}, 0);
setTimeout(() => {
  //This is a Asynchronous Action so it is run at the end
  console.log("This is under TimeOut 2");
}, 2000);

console.log("this is THE END"); //This is a synchronous action

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harshit");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
