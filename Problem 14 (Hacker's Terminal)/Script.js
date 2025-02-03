arr = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning Up",
];
async function print(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = arr[data];
      document.querySelector(".container").append(div);
      dot();
      console.log(arr[data]);
      resolve(200);
    }, Math.floor(Math.random() * 8000));
  });
}

async function getData() {
  await print(0);
  await print(1);
  await print(2);
  await print(3);
  await print(4);
};

function dot() {
  setInterval(() => {
    let last = document.querySelector(".container").getElementsByTagName("div");
    last=last[last.length-1];
    if (last.innerHTML.endsWith("..."))
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    else last.innerHTML = last.innerHTML + ".";
  }, 1000);
}

getData();