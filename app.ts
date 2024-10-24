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

////////////////////////////////////////////////////////////////////////////////////////////////

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
//   //xhr.open("GET", "/media.json", true); // Asynchronous request
//   xhr.open("GET", "./media.json", true);

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
//     //imageDisplay.src = `/media/${currentMedia.imageFileName}`;
//     imageDisplay.src = `./media/${currentMedia.imageFileName}`;
//     imageDisplay.classList.remove("hidden");
//     //audioPlayer.src = `/media/${currentMedia.audioFileName}`;
//     audioPlayer.src = `./media/${currentMedia.audioFileName}`;
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
//     event.preventDefault(); // Prevent default spacebar scrolling behavior
//     // Space bar should reveal answer or reset state depending on the current state
//     if (answerButton.textContent === "Answer") {
//       revealAnswer(); // If in "Answer" state, show the answer
//     } else {
//       resetState(); // If in "OK" state, reset to the next word
//     }
//   } else if (event.code === "Enter") {
//     // Enter should replay the audio, but only if the answer is shown
//     if (!imageDisplay.classList.contains("hidden")) {
//       replayAudio(); // Replay audio only when the image (answer) is visible
//     }
//   }
// });

// // Load the media data when the page loads
// loadMediaData();

////////////////////////////////////////////////////////////////////////////////////////////////

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
let groupedMediaData: { [key: string]: MediaItem[] } = {}; // Group words by length
let currentGroupIndex = 2; // Starting group for Option 2 (Length_2)
let currentGroupItems: MediaItem[] = []; // Holds the remaining items in the current group
let isGroupedByLength = false; // Flag to track if option 2 is selected

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
const popupMenu = document.getElementById("popupMenu") as HTMLDivElement;
const option1Button = document.getElementById(
  "option1Button"
) as HTMLButtonElement;
const option2Button = document.getElementById(
  "option2Button"
) as HTMLButtonElement;

// Function to load the media.json file using XMLHttpRequest
function loadMediaData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./media.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      try {
        mediaData = JSON.parse(xhr.responseText);
        console.log(`Loaded ${mediaData.length} items from media.json`);
        groupWordsByLength(); // Group words by length for option 2
        showPopupMenu(); // Show the menu after data is loaded
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

// Function to group words by length
function groupWordsByLength() {
  mediaData.forEach((item) => {
    const lengthTag = item.tags.match(/Length_\d+/);
    if (lengthTag) {
      const length = lengthTag[0]; // e.g., "Length_2"
      if (!groupedMediaData[length]) {
        groupedMediaData[length] = [];
      }
      groupedMediaData[length].push(item);
    }
  });
}

// Function to show the pop-up menu
function showPopupMenu() {
  popupMenu.style.display = "block";
}

// Function to hide the pop-up menu and start the selected mode
function hidePopupMenu() {
  popupMenu.style.display = "none";
}

// Function to select a random media item (Option 1: show all cards at random)
function getRandomMediaItem(): MediaItem {
  const randomIndex = Math.floor(Math.random() * mediaData.length);
  return mediaData[randomIndex];
}

// Function to select a random media item from the current group (Option 2: grouped by length)
function getRandomMediaItemFromGroup(): MediaItem | null {
  // If the current group is empty, move to the next length group
  if (currentGroupItems.length === 0) {
    currentGroupIndex++;
    const nextGroup = groupedMediaData[`Length_${currentGroupIndex}`];
    if (nextGroup && nextGroup.length > 0) {
      currentGroupItems = [...nextGroup]; // Reload the next group
    } else {
      console.log("No more groups left");
      return null; // No more groups
    }
  }

  // Select a random word from the current group
  const randomIndex = Math.floor(Math.random() * currentGroupItems.length);
  const selectedItem = currentGroupItems.splice(randomIndex, 1)[0]; // Remove the item from the current group
  return selectedItem;
}

// Function to show a random word (either from all cards or grouped by length)
function showRandomWord() {
  if (isGroupedByLength) {
    // Show cards grouped by length (Option 2)
    currentMedia = getRandomMediaItemFromGroup();
    if (!currentMedia) {
      console.log("All words have been displayed.");
      return; // No more words to display
    }
  } else {
    // Show all cards at random (Option 1)
    currentMedia = getRandomMediaItem();
  }

  if (currentMedia) {
    wordDisplay.textContent = currentMedia.word;
    imageDisplay.classList.add("hidden");
    replayButton.classList.add("hidden");
    answerButton.textContent = "Answer";
    audioPlayer.src = "";
  }
}

// Function to reveal the answer
function revealAnswer() {
  if (currentMedia) {
    imageDisplay.src = `./media/${currentMedia.imageFileName}`;
    imageDisplay.classList.remove("hidden");
    audioPlayer.src = `./media/${currentMedia.audioFileName}`;
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
    if (answerButton.textContent === "Answer") {
      revealAnswer();
    } else {
      resetState();
    }
  } else if (event.code === "Enter") {
    event.preventDefault(); // Prevent default enter key behavior
    if (!imageDisplay.classList.contains("hidden")) {
      replayAudio();
    }
  }
});

// Event listeners for popup options
option1Button.addEventListener("click", () => {
  isGroupedByLength = false;
  hidePopupMenu();
  showRandomWord(); // Show all cards randomly
});

option2Button.addEventListener("click", () => {
  isGroupedByLength = true;
  currentGroupIndex = 2; // Start with the shortest length group
  currentGroupItems = [...groupedMediaData[`Length_${currentGroupIndex}`]]; // Load the first group
  hidePopupMenu();
  showRandomWord(); // Show grouped cards by length
});

// Load the media data when the page loads
loadMediaData();
