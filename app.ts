// interface MediaItem {
//   number: number;
//   word: string;
//   syllables: string | null;
//   audioFileName: string;
//   imageFileName: string;
//   tags: string;
// }

// let mediaData: MediaItem[] = [];
// let currentMedia: MediaItem | null = null;

// const wordDisplay = document.getElementById("wordDisplay") as HTMLDivElement;
// const imageDisplay = document.getElementById(
//   "imageDisplay"
// ) as HTMLImageElement;
// const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement;
// const answerButton = document.getElementById(
//   "answerButton"
// ) as HTMLButtonElement;
// const replayButton = document.getElementById(
//   "replayButton"
// ) as HTMLButtonElement;

// // Function to load the media.json file using XMLHttpRequest
// function loadMediaData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "/media.json", true); // Asynchronous request

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Parse the JSON response
//       try {
//         mediaData = JSON.parse(xhr.responseText);
//         console.log(`Loaded ${mediaData.length} items from media.json`); // Log the number of items loaded
//         showRandomWord(); // Start by showing a random word after loading the data
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     }
//   };

//   xhr.onerror = function () {
//     console.error("Network error while loading media data.");
//   };

//   xhr.send();
// }

// // Function to select a random media item
// function getRandomMediaItem(): MediaItem {
//   const randomIndex = Math.floor(Math.random() * mediaData.length); // Correct random selection
//   return mediaData[randomIndex];
// }

// // Function to show a random word and initialize buttons
// function showRandomWord() {
//   if (mediaData.length === 0) {
//     console.error("No media items loaded.");
//     return;
//   }

//   currentMedia = getRandomMediaItem();
//   wordDisplay.textContent = currentMedia.word;
//   imageDisplay.classList.add("hidden");
//   replayButton.classList.add("hidden");
//   answerButton.textContent = "Answer";
//   audioPlayer.src = "";
// }

// // Function to reveal the answer
// function revealAnswer() {
//   if (currentMedia) {
//     // Assume the media files are in /media folder
//     imageDisplay.src = `/media/${currentMedia.imageFileName}`;
//     imageDisplay.classList.remove("hidden");
//     audioPlayer.src = `/media/${currentMedia.audioFileName}`;
//     audioPlayer.play();
//     answerButton.textContent = "OK";
//     replayButton.classList.remove("hidden");
//   }
// }

// // Function to replay the audio
// function replayAudio() {
//   if (currentMedia) {
//     audioPlayer.play();
//   }
// }

// // Function to reset the state after "OK" is pressed
// function resetState() {
//   showRandomWord();
// }

// // Event listeners for buttons
// answerButton.addEventListener("click", () => {
//   if (answerButton.textContent === "Answer") {
//     revealAnswer();
//   } else {
//     resetState();
//   }
// });

// replayButton.addEventListener("click", replayAudio);

// // Keyboard event listeners
// document.addEventListener("keydown", (event) => {
//   if (event.code === "Space") {
//     answerButton.click();
//   } else if (event.code === "Enter") {
//     replayButton.click();
//   }
// });

// // Load the media data when the page loads
// loadMediaData();

// ------------------------------
// interface MediaItem {
//   number: number;
//   word: string;
//   syllables: string | null;
//   audioFileName: string;
//   imageFileName: string;
//   tags: string;
// }

// let mediaData: MediaItem[] = [];
// let currentMedia: MediaItem | null = null;

// const wordDisplay = document.getElementById("wordDisplay") as HTMLDivElement;
// const imageDisplay = document.getElementById(
//   "imageDisplay"
// ) as HTMLImageElement;
// const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement;
// const answerButton = document.getElementById(
//   "answerButton"
// ) as HTMLButtonElement;
// const replayButton = document.getElementById(
//   "replayButton"
// ) as HTMLButtonElement;

// // Function to load the media.json file using XMLHttpRequest
// function loadMediaData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "/media.json", true); // Asynchronous request

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Parse the JSON response
//       try {
//         mediaData = JSON.parse(xhr.responseText);
//         console.log(`Loaded ${mediaData.length} items from media.json`); // Log the number of items loaded
//         showRandomWord(); // Start by showing a random word after loading the data
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     }
//   };

//   xhr.onerror = function () {
//     console.error("Network error while loading media data.");
//   };

//   xhr.send();
// }

// // Function to select a random media item
// function getRandomMediaItem(): MediaItem {
//   const randomIndex = Math.floor(Math.random() * mediaData.length); // Correct random selection
//   return mediaData[randomIndex];
// }

// // Function to show a random word and initialize buttons
// function showRandomWord() {
//   if (mediaData.length === 0) {
//     console.error("No media items loaded.");
//     return;
//   }

//   currentMedia = getRandomMediaItem();
//   wordDisplay.textContent = currentMedia.word;
//   imageDisplay.classList.add("hidden");
//   replayButton.classList.add("hidden");
//   answerButton.textContent = "Answer";
//   audioPlayer.src = "";
// }

// // Function to reveal the answer
// function revealAnswer() {
//   if (currentMedia) {
//     // Assume the media files are in /media folder
//     imageDisplay.src = `/media/${currentMedia.imageFileName}`;
//     imageDisplay.classList.remove("hidden");
//     audioPlayer.src = `/media/${currentMedia.audioFileName}`;
//     audioPlayer.play();
//     answerButton.textContent = "OK";
//     replayButton.classList.remove("hidden");
//   }
// }

// // Function to replay the audio
// function replayAudio() {
//   if (currentMedia) {
//     audioPlayer.play();
//   }
// }

// // Function to reset the state after "OK" is pressed
// function resetState() {
//   showRandomWord();
// }

// // Event listeners for buttons
// answerButton.addEventListener("click", () => {
//   if (answerButton.textContent === "Answer") {
//     revealAnswer();
//   } else {
//     resetState();
//   }
// });

// replayButton.addEventListener("click", replayAudio);

// // Keyboard event listeners
// document.addEventListener("keydown", (event) => {
//   if (event.code === "Space") {
//     // Space should reveal answer or reset the state based on the current state
//     if (answerButton.textContent === "Answer") {
//       revealAnswer(); // Reveal the answer
//     } else {
//       resetState(); // Reset state and show next word
//     }
//   } else if (event.code === "Enter") {
//     // Enter should replay the audio only if the answer is shown (image is visible)
//     if (!imageDisplay.classList.contains("hidden")) {
//       replayAudio(); // Replay audio when image is visible
//     }
//   }
// });

// // Load the media data when the page loads
// loadMediaData();

interface MediaItem {
  number: number;
  word: string;
  syllables: string | null;
  audioFileName: string;
  imageFileName: string;
  tags: string;
}

let mediaData: MediaItem[] = [];
let currentMedia: MediaItem | null = null;

const wordDisplay = document.getElementById("wordDisplay") as HTMLDivElement;
const imageDisplay = document.getElementById(
  "imageDisplay"
) as HTMLImageElement;
const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement;
const answerButton = document.getElementById(
  "answerButton"
) as HTMLButtonElement;
const replayButton = document.getElementById(
  "replayButton"
) as HTMLButtonElement;

// Function to load the media.json file using XMLHttpRequest
function loadMediaData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/media.json", true); // Asynchronous request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      try {
        mediaData = JSON.parse(xhr.responseText);
        console.log(`Loaded ${mediaData.length} items from media.json`); // Log the number of items loaded
        showRandomWord(); // Start by showing a random word after loading the data
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  };

  xhr.onerror = function () {
    console.error("Network error while loading media data.");
  };

  xhr.send();
}

// Function to select a random media item
function getRandomMediaItem(): MediaItem {
  const randomIndex = Math.floor(Math.random() * mediaData.length); // Correct random selection
  return mediaData[randomIndex];
}

// Function to show a random word and initialize buttons
function showRandomWord() {
  if (mediaData.length === 0) {
    console.error("No media items loaded.");
    return;
  }

  currentMedia = getRandomMediaItem();
  wordDisplay.textContent = currentMedia.word;
  imageDisplay.classList.add("hidden");
  replayButton.classList.add("hidden");
  answerButton.textContent = "Answer";
  audioPlayer.src = "";
}

// Function to reveal the answer
function revealAnswer() {
  if (currentMedia) {
    // Assume the media files are in /media folder
    imageDisplay.src = `/media/${currentMedia.imageFileName}`;
    imageDisplay.classList.remove("hidden");
    audioPlayer.src = `/media/${currentMedia.audioFileName}`;
    audioPlayer.play();
    answerButton.textContent = "OK";
    replayButton.classList.remove("hidden");
  }
}

// Function to replay the audio
function replayAudio() {
  if (currentMedia) {
    audioPlayer.play();
  }
}

// Function to reset the state after "OK" is pressed
function resetState() {
  showRandomWord();
}

// Event listeners for buttons
answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Answer") {
    revealAnswer();
  } else {
    resetState();
  }
});

replayButton.addEventListener("click", replayAudio);

// Keyboard event listeners
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default spacebar scrolling behavior
    // Space bar should reveal answer or reset state depending on the current state
    if (answerButton.textContent === "Answer") {
      revealAnswer(); // If in "Answer" state, show the answer
    } else {
      resetState(); // If in "OK" state, reset to the next word
    }
  } else if (event.code === "Enter") {
    // Enter should replay the audio, but only if the answer is shown
    if (!imageDisplay.classList.contains("hidden")) {
      replayAudio(); // Replay audio only when the image (answer) is visible
    }
  }
});

// Load the media data when the page loads
loadMediaData();
