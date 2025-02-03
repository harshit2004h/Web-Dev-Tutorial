import path from "path";

let MyPath =
  "D:\\Programming\\VS Code\\Web Development\\Code With Harry Full Stack\\Lecture 87 (fs and path Modules)\\abc.txt";
console.log(path.extname(MyPath));
console.log(path.dirname(MyPath));
console.log(path.basename(MyPath));

console.log(path.join("C:/", "Programs\\hello.txt"));
