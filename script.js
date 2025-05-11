const container = document.querySelector(".cardContainer");

let audioPlayer = document.querySelector("#audioPlayer");
let playBt = document.querySelector("#playBt");
let pauseBt = document.querySelector("#pauseBt");

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

let loadCard = function (content) {
  let song = content.tracks.items;

  container.innerHTML = "";

  song.forEach((playlist) => {
    const card = document.createElement("div");
    card.classList.add("card");
    //console.log("each content called");

    card.innerHTML = `
            <div class="play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="green">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                      <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" />
                     </svg>

            </div>
                                <img src="${playlist.album.images[0]?.url}" alt="${playlist.title}">
            <h3>${playlist.name}</h3>
            <p>${playlist.artists[0]?.name}</p> `;

    const currSong = document.querySelector(".scroll-text");
    card.addEventListener("click", () => {
      audioPlayer.src = playlist.preview_url;
      audioPlayer.play();

      playBt.style.display = "none";
      pauseBt.style.display = "inline-block";

      currSong.innerHTML = "";
      currSong.innerHTML = `<h3>${playlist.name}</h3>`;

      history.pushState({ songName: `${playlist.name}` }, "", "");
    });

    container.appendChild(card);
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

const volControl = document.querySelector("#volumeControl");

audioPlayer.volume = volControl.value;

volControl.addEventListener("input", function () {
  audioPlayer.volume = volControl.value;
});

audioPlayer.addEventListener("play",function(){
  audioPlayer.volume = volControl.value;
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
