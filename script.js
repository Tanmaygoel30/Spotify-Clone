const container = document.querySelector(".cardContainer");

let audioPlayer = document.querySelector("#audioPlayer");
let playBt = document.querySelector("#playBt");
let pauseBt = document.querySelector("#pauseBt");
let previousBt = document.querySelector("#previousBt");
let nextBt = document.querySelector("#nextBt");

let songtime = document.querySelector("#indicator");
let songDuration;
let incValue;
let index = -1;
let song;
const currSong = document.querySelector(".scroll-text");

let timer = document.querySelector("#timer");
let songLen = document.querySelector("#songLen");
let indicator = document.querySelector("#indicator");

let right = document.querySelector(".right");
let rightMost = document.querySelector(".rightMost");
let currentSong = document.querySelector("#currentSong");
let currentSongImg = document.querySelector("#currentSongImg");
let currentSongTitle = document.querySelector("#currentSongTitle");

let loadCard = function (content) {
  song = content.tracks.items;

  container.innerHTML = "";

  song.forEach((playlist) => {
    index++;
    const cardNew = document.createElement("div");
    cardNew.classList.add("card");
    //console.log("each content called");

    cardNew.innerHTML = `
            <div class="play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="green">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                      <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" />
                     </svg>

            </div>
                                <img src="${playlist.album.images[0]?.url}" alt="${playlist.title}">
            <h3>${playlist.name}</h3>
            <p>${playlist.artists[0]?.name}</p> `;

    cardNew.addEventListener("click", () => {
      rightMost.classList.add("rightMostActive");
      right.style.width = "50vw";
      console.log("Song at index " + song.indexOf(playlist));
      audioPlayer.src = playlist.preview_url;
      audioPlayer.addEventListener("loadedmetadata", () => {
        songDuration = audioPlayer.duration;
        console.log("Song Time " + songDuration);
        let Duration = songDuration / 100;
        songLen.textContent = parseFloat(Duration.toFixed(2));
        currentSongImg.src = `${playlist.album.images[0]?.url}`;
        currentSongTitle.innerHTML = `<h3>${playlist.name}</h3>`;
      });
      // songtime.width = "0";
      // incValue = 100 / songDuration;

      playBt.style.display = "none";
      pauseBt.style.display = "inline-block";

      let timeTrack = 0;
      let songTrack;

      audioPlayer.addEventListener("play", () => {
        // songDuration = audioPlayer.duration;
        // if (!songTrack) {
        //   songTrack = setInterval(() => {
        //     console.log("Inside Interval");
        //     timeTrack++;

        //     if (timeTrack >= songDuration) {
        //       clearInterval(songTrack);
        //       songTrack = null;
        //       timeTrack = 0;
        //       nextFunc();
        //     }
        //   }, 1000);
        // }


        // let timeVal = 0.0;
        // songTrack = setInterval(() => {
        //   if (timeVal < songDuration) {
        //     timeVal += 0.01;
        //     timer.textContent = parseFloat(timeVal.toFixed(2));
        //   } else {
        //     clearInterval(songTrack);
        //   }
        // }, 1000);

        audioPlayer.addEventListener("timeupdate", () => {
          let currTime = audioPlayer.currentTime;
          indicator.style.width = `${((currTime/songDuration)*100)}%`;
          currTime = currTime / 100;
          timer.textContent = parseFloat(currTime.toFixed(2));
          // console.log("Current Time:", audioPlayer.currentTime.toFixed(2));
        });
      });

      currSong.innerHTML = "";
      currSong.innerHTML = `<h3>${playlist.name}</h3>`;

      audioPlayer.play();

      previousBt.addEventListener("click", () => {
        index = song.indexOf(playlist);
        index--;
        if (index < 0) index = 0; // loop back to same song

        if (song[index]?.preview_url) {
          audioPlayer.src = song[index].preview_url;
          audioPlayer.play();
          currSong.innerHTML = "";
          currSong.innerHTML = `<h3>${song[index].name}</h3>`;
          playlist = song[index];
          currentSongImg.src = `${playlist.album.images[0]?.url}`;
          currentSongTitle.innerHTML = `<h3>${playlist.name}</h3>`;
        } else {
          console.error("Missing preview_url at index:", index, song[index]);
        }
      });

      let nextFunc = () => {
        index = song.indexOf(playlist);
        index++;
        if (index > song.length - 1) index = 0; // loop back to first song

        if (song[index]?.preview_url) {
          audioPlayer.src = song[index].preview_url;
          audioPlayer.play();
          currSong.innerHTML = "";
          currSong.innerHTML = `<h3>${song[index].name}</h3>`;
          playlist = song[index];
          currentSongImg.src = `${playlist.album.images[0]?.url}`;
          currentSongTitle.innerHTML = `<h3>${playlist.name}</h3>`;
        } else {
          console.error("Missing preview_url at index:", index, song[index]);
        }
      };
      nextBt.addEventListener("click", nextFunc);

      history.pushState({ songName: `${playlist.name}` }, "", "");
    });

    container.appendChild(cardNew);
  });
};

async function bollywood() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=bollywood&type=track"
  );
  const content = await call.json();
  console.log(content);
  // console.log("content loaded");

  loadCard(content);
  // let song = content.tracks.items;

  // container.innerHTML = "";

  // song.forEach((playlist) => {
  //   const card = document.createElement("div");
  //   card.classList.add("card");
  //   //console.log("each content called");

  //   card.innerHTML = `
  //           <div class="play">
  //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="green">
  //                       <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
  //                     <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" />
  //                    </svg>

  //           </div>
  //                               <img src="${playlist.album.images[0]?.url}" alt="${playlist.title}">
  //           <h3>${playlist.name}</h3>
  //           <p>${playlist.artists[0]?.name}</p> `;

  //           card.addEventListener("click",() => {
  //               audioPlayer.src = playlist.preview_url;
  //               audioPlayer.play();
  //               playBt.style.display = "none";
  //               pauseBt.style.display = "inline-block";
  //           });

  //   container.appendChild(card);
  // });
}

async function hollywood() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=hollywood&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

async function haryanvi() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=haryanvi&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

async function punjabi() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=Punjabi&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

async function bhakti() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=Devotional&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

async function lofi() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=Lo-Fi&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

async function hipHop() {
  let call = await fetch(
    "https://v1.nocodeapi.com/tanmay1234/spotify/cnApuUWfsQvnMwYy/search?q=Hip-Hop&type=track"
  );
  const content = await call.json();
  console.log(content);

  loadCard(content);
}

// const card = document.querySelector(".card");

// card.addEventListener("click", function () {
//   history.pushState({}, "", "");
// });

const backBt = document.querySelector(".goBack");

backBt.addEventListener("click", function () {
  console.log("Back bt");
  window.history.back();
});

const forward = document.querySelector(".goForward");

forward.addEventListener("click", function () {
  history.forward();
});

playBt.addEventListener("click", () => {
  audioPlayer.play();
  playBt.style.display = "none";
  pauseBt.style.display = "inline-block";
});

pauseBt.addEventListener("click", () => {
  audioPlayer.pause();
  playBt.style.display = "inline-block";
  pauseBt.style.display = "none";
});

const volControl = document.querySelector("#volumeControl");

audioPlayer.volume = volControl.value;

const songVol = document.querySelector("#songVol");

songVol.addEventListener("click", function () {
  if (songVol.src.endsWith("mute.svg")) {
    volControl.value = 0.6;
    audioPlayer.volume = volControl.value;
    songVol.src = "highVol.svg";
  } else {
    volControl.value = 0;
    audioPlayer.volume = volControl.value;
    songVol.src = "mute.svg";
  }
});

volControl.addEventListener("input", function () {
  audioPlayer.volume = volControl.value;
  if (volControl.value == 0) {
    songVol.src = "mute.svg";
  }
  if (volControl.value < 0.6 && volControl.value != 0) {
    songVol.src = "lowVol.svg";
  }
  if (volControl.value >= 0.6) {
    songVol.src = "highVol.svg";
  }
});

audioPlayer.addEventListener("play", function () {
  audioPlayer.volume = volControl.value;
  // progressBar;
});

// script.js

// const cardContainer = document.querySelector(".cardContainer");

// async function bollywood() {
//     try {
//         // const url = "YOUR_SPOTIFY_API_URL_HERE"; // Replace this with your actual URL
//         // const response = await fetch(url, {
//         //     method: "GET",
//         //     headers: {
//         //         "Authorization": `Bearer YOUR_ACCESS_TOKEN_HERE`, // Your Spotify token
//         //         "Content-Type": "application/json",
//         //     }
//         // });
//         const response = await fetch('https://v1.nocodeapi.com/tanmay123/spotify/qjYSwshSYKpTtEto/search?q=bollywood&type=track')

//         const data = await response.json();
//         console.log(data); // See full data in console

//         const songs = data.tracks.items; // VERY IMPORTANT: data.tracks.items

//         cardContainer.innerHTML = ""; // Clear previous content

//         songs.forEach((track) => {
//             const card = document.createElement("div");
//             card.classList.add("card");

//             card.innerHTML = `
//                 <div class="play">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="green">
//                         <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
//                         <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" />
//                     </svg>
//                 </div>
//                 <img src="${track.album.images[0]?.url}" alt="${track.name}">
//                 <h3>${track.name}</h3>
//                 <p>${track.artists[0]?.name}</p>
//             `;

//             cardContainer.appendChild(card);
//         });

//     } catch (error) {
//         console.error("Error fetching Bollywood songs:", error);
//     }
// }

// bollywood();
