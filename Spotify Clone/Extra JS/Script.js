var audio = new Audio();
async function getSongs() {
  let a = await fetch("http://127.0.0.1:5501/spotify%20Clone/Songs/");
  let text = await a.text();

  let div = document.createElement("div");
  div.innerHTML = text;
  let s = div.getElementsByTagName("a");

  let songs = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element.href.endsWith(".mp3")) songs.push(element.href);
  }
  return songs;
}

const PlayMusic= (song) => {
  audio.src = song;
  audio.play();
}


async function main() {
  let songs = await getSongs();
  console.log(songs);

  let SongUL = document
    .querySelector(".SongList")
    .getElementsByTagName("ul")[0];
  let i = 0;
  for (const song of songs) {
    let list = document.createElement("li");
    list.innerHTML =
      list.innerHTML +
      ` <div class="MusicIcon play${i}">
          <i
            class="fa-solid fa-music"
            style="color: #ffffff; font-size: 25px"
          ></i>
        </div>
        <div class="info play${i}">
          <p class="SongName">${song
            .split(".mp3")[0]
            .split("/Songs/")[1]
            .replaceAll("%20", " ")}</p>
          <p class="SongArtist">Harshit Srivastava</p>
        </div>
        <div class="play play${i}">
          <div class="prev${i}">
            <i class="fa-regular fa-circle-play" style="font-size: 35px;"></i>
          </div>
        </div>`;
    SongUL.append(list);
    i++;
  }


  for (let i = 0; i < songs.length; i++) {
    let a = document.querySelectorAll(`.play${i}`);
    array = [...a];
    array.forEach((element) => {
      element.addEventListener("click", (params) => {

        PlayMusic(songs[i]);
        

        // document.getElementsByTagName('audio').addEventListener(
        //   "playing",
        //   () => {
        //     audio.pause();
        //     let after = document.createElement("div");
        //     after.setAttribute("class", `prev${i}`);
        //     after.innerHTML = `<i class="fa-regular fa-circle-play" style="font-size: 35px;"></i>`;
        //     document.querySelector(`.after${i}`).replaceWith(after);
        //   },
        //   false
        // );
        // document.getElementsByTagName('audio').addEventListener(
        //   "pause",
        //   () => {
        //     audio.play();
        //     let after = document.createElement("div");
        //     after.setAttribute("class", `after${i}`);
        //     after.innerHTML = `<i class="fa-regular fa-circle-pause" style="font-size: 35px;"></i>`;
        //     document.querySelector(`.prev${i}`).replaceWith(after);
        //   },
        //   false
        // );

        audio.addEventListener("loadeddata", () => {
          let duration = audio.duration;
          duration = (duration / 60).toFixed(2);
          if (duration.toString().split(".")[0] <= 9)
            document.querySelector(".TotalTime").innerHTML = `0${
              duration.toString().split(".")[0]
            }:${duration.toString().split(".")[1]}`;
          else
            document.querySelector(".TotalTime").innerHTML = `${
              duration.toString().split(".")[0]
            }:${duration.toString().split(".")[1]}`;
        });

      });

    });
  }

  document.querySelector(".PlayBtn").getElementsByTagName("img").addEventListener("click", (params) => {
    console.log("abcd");
    if (audio.paused) {
      audio.play();
      document.querySelector(".PlayBtn").getElementsByTagName("img").src="Assets/Pause.svg"
    } else {
      audio.pause();
      document.querySelector(".PlayBtn").getElementsByTagName("img").src="Assets/Play.svg"
    }
  });
}
main();

