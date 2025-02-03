let CurrentSong = new Audio();
let songs;

async function getSongs() {
  CurrentFolder = folder;
  let a = await fetch(`http://127.0.0.1:5500/Songs/`);
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

const PlayMusic = (track, pause = false) => {
  CurrentSong.src = track;
  if (!pause) {
    CurrentSong.play();
    PlayBtn.src = "Assets/Pause.svg";
  }
  document.querySelector(".SongInfo").innerHTML = `${track
    .split(".mp3")[0]
    .split(`/Songs/`)[1]
    .split("-")[0]
    .replaceAll("%20", " ")}`;
};

function secondsToMinutes(seconds) {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Pad minutes and seconds with leading zeros if needed
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  // Return the formatted time
  return `${formattedMinutes}:${formattedSeconds}`;
}

function MoveSeekBar(Current, Total) {
  if (Total === 0) {
    return 0;
  }
  // Calculate the percentage
  const percentage = (Current / Total) * 100;

  // Return the percentage value
  return percentage;
}

async function main() {
  songs = await getSongs();
  console.log(songs);

  PlayMusic(songs[0], true);

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
          <p class="FullSong" style="display: none;">${song}</p>
            <p class="SongName">${song
              .split(".mp3")[0]
              .split(`/Songs/`)[1]
              .split("-")[0]
              .replaceAll("%20", " ")}</p>
            <p class="SongArtist">${song
              .split(".mp3")[0]
              .split("/Songs/")[1]
              .split("-")[1]
              .replaceAll("%20", " ")}</p>
          </div>
          <div class="play play${i}">
            <div class="prev${i}">
              <i class="fa-regular fa-circle-play" style="font-size: 35px;"></i>
            </div>
          </div>`;
    SongUL.append(list);
    i++;
  }

  Array.from(
    document.querySelector(".SongList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (params) => {
      console.log(e.querySelector(".FullSong").innerHTML);
      PlayMusic(e.querySelector(".FullSong").innerHTML);
      document.querySelector(".SongInfo").innerHTML =
        e.querySelector(".SongName").innerHTML;
    });
  });

  PlayBtn.addEventListener("click", (params) => {
    if (CurrentSong.paused) {
      CurrentSong.play();
      PlayBtn.src = "Assets/Pause.svg";
    } else {
      CurrentSong.pause();
      PlayBtn.src = "Assets/Play.svg";
    }
  });

  CurrentSong.addEventListener("timeupdate", (params) => {
    let ct = CurrentSong.currentTime;
    let duration = CurrentSong.duration;

    document.querySelector(".TotalTime").innerHTML = secondsToMinutes(
      Math.floor(duration)
    );
    document.querySelector(".CurrentTime").innerHTML = secondsToMinutes(
      Math.floor(ct)
    );

    document.querySelector(".SeekCircle").style.width = `${MoveSeekBar(
      ct,
      duration
    )}%`;
  });

  document.querySelector(".SeekBar").addEventListener("click", (e) => {
    console.log(
      e.offsetX,
      document.querySelector(".SeekBar").getBoundingClientRect().width
    );
    let percent =
      (e.offsetX /
        document.querySelector(".SeekBar").getBoundingClientRect().width) *
      100;
    document.querySelector(".SeekCircle").style.width = percent + "%";
    CurrentSong.currentTime = (CurrentSong.duration * percent) / 100;
  });

  document.querySelector(".HamBurger").addEventListener("click", () => {
    document.querySelector(".Left_Container").style.left = 0;
  });
  document.querySelector(".Cross").addEventListener("click", () => {
    document.querySelector(".Left_Container").style.left = -100 + "%";
  });

  Back.addEventListener("click", () => {
    console.log(songs.indexOf(CurrentSong.src));
    if (songs.indexOf(CurrentSong.src) - 1 >= 0)
      PlayMusic(songs[songs.indexOf(CurrentSong.src) - 1]);
  });

  Next.addEventListener("click", () => {
    console.log(songs.indexOf(CurrentSong.src));
    if (songs.indexOf(CurrentSong.src) + 1 < songs.length)
      PlayMusic(songs[songs.indexOf(CurrentSong.src) + 1]);
  });

  document.querySelector(".VolSeek").addEventListener("change", (e) => {
    console.log(e.target.value);
    CurrentSong.volume = e.target.value / 100;
  });
}
main();
