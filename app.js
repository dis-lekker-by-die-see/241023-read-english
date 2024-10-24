// interface MediaItem {
//   number: number;
//   word: string;
//   syllables: string | null;
//   audioFileName: string;
//   imageFileName: string;
//   tags: string;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mediaData = [];
var currentMedia = null;
var groupedMediaData = {}; // Group words by length
var currentGroupIndex = 2; // Starting group for Option 2 (Length_2)
var currentGroupItems = []; // Holds the remaining items in the current group
var isGroupedByLength = false; // Flag to track if option 2 is selected
var wordDisplay = document.getElementById("wordDisplay");
var imageDisplay = document.getElementById("imageDisplay");
var audioPlayer = document.getElementById("audioPlayer");
var answerButton = document.getElementById("answerButton");
var replayButton = document.getElementById("replayButton");
var popupMenu = document.getElementById("popupMenu");
var option1Button = document.getElementById("option1Button");
var option2Button = document.getElementById("option2Button");
// Function to load the media.json file using XMLHttpRequest
function loadMediaData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./media.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            try {
                mediaData = JSON.parse(xhr.responseText);
                console.log("Loaded ".concat(mediaData.length, " items from media.json"));
                groupWordsByLength(); // Group words by length for option 2
                showPopupMenu(); // Show the menu after data is loaded
            }
            catch (error) {
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
    mediaData.forEach(function (item) {
        var lengthTag = item.tags.match(/Length_\d+/);
        if (lengthTag) {
            var length_1 = lengthTag[0]; // e.g., "Length_2"
            if (!groupedMediaData[length_1]) {
                groupedMediaData[length_1] = [];
            }
            groupedMediaData[length_1].push(item);
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
function getRandomMediaItem() {
    var randomIndex = Math.floor(Math.random() * mediaData.length);
    return mediaData[randomIndex];
}
// Function to select a random media item from the current group (Option 2: grouped by length)
function getRandomMediaItemFromGroup() {
    // If the current group is empty, move to the next length group
    if (currentGroupItems.length === 0) {
        currentGroupIndex++;
        var nextGroup = groupedMediaData["Length_".concat(currentGroupIndex)];
        if (nextGroup && nextGroup.length > 0) {
            currentGroupItems = __spreadArray([], nextGroup, true); // Reload the next group
        }
        else {
            console.log("No more groups left");
            return null; // No more groups
        }
    }
    // Select a random word from the current group
    var randomIndex = Math.floor(Math.random() * currentGroupItems.length);
    var selectedItem = currentGroupItems.splice(randomIndex, 1)[0]; // Remove the item from the current group
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
    }
    else {
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
        imageDisplay.src = "./media/".concat(currentMedia.imageFileName);
        imageDisplay.classList.remove("hidden");
        audioPlayer.src = "./media/".concat(currentMedia.audioFileName);
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
answerButton.addEventListener("click", function () {
    if (answerButton.textContent === "Answer") {
        revealAnswer();
    }
    else {
        resetState();
    }
});
replayButton.addEventListener("click", replayAudio);
// Keyboard event listeners
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault(); // Prevent default spacebar scrolling behavior
        if (answerButton.textContent === "Answer") {
            revealAnswer();
        }
        else {
            resetState();
        }
    }
    else if (event.code === "Enter") {
        event.preventDefault(); // Prevent default enter key behavior
        if (!imageDisplay.classList.contains("hidden")) {
            replayAudio();
        }
    }
});
// Event listeners for popup options
option1Button.addEventListener("click", function () {
    isGroupedByLength = false;
    hidePopupMenu();
    showRandomWord(); // Show all cards randomly
});
option2Button.addEventListener("click", function () {
    isGroupedByLength = true;
    currentGroupIndex = 2; // Start with the shortest length group
    currentGroupItems = __spreadArray([], groupedMediaData["Length_".concat(currentGroupIndex)], true); // Load the first group
    hidePopupMenu();
    showRandomWord(); // Show grouped cards by length
});
// Load the media data when the page loads
loadMediaData();
