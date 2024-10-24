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
var currentGroupItems = []; // Holds the remaining items in the current group
var currentGroupIndex = 2; // Default length group is "2"
var minLength = 2;
var maxLength = 10; // Adjust according to your dataset
var wordDisplay = document.getElementById("wordDisplay");
var imageDisplay = document.getElementById("imageDisplay");
var audioPlayer = document.getElementById("audioPlayer");
var answerButton = document.getElementById("answerButton");
var replayButton = document.getElementById("replayButton");
var radioButtonContainer = document.getElementById("radioButtonContainer");
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
                groupWordsByLength(); // Group words by length for the radio buttons
                createRadioButtons(); // Create the radio buttons dynamically
                selectGroup(currentGroupIndex); // Default group is "2"
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
// Function to create radio buttons dynamically
function createRadioButtons() {
    for (var i = minLength; i <= maxLength; i++) {
        var radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "wordLengthGroup";
        radioButton.value = i.toString();
        //radioButton.value = `|   ${i.toString()}   `;
        radioButton.id = "radio-".concat(i);
        radioButton.checked = i === currentGroupIndex; // Default group is 2
        radioButton.addEventListener("change", function (event) {
            var selectedValue = event.target.value;
            selectGroup(parseInt(selectedValue, 10)); // Switch to the selected group
        });
        var label = document.createElement("label");
        label.htmlFor = "radio-".concat(i);
        label.textContent = "".concat(i.toString(), "   ");
        radioButtonContainer.appendChild(radioButton);
        radioButtonContainer.appendChild(label);
    }
}
// Function to select the group and display words only from that group
function selectGroup(length) {
    currentGroupIndex = length;
    var groupKey = "Length_".concat(currentGroupIndex);
    currentGroupItems = __spreadArray([], groupedMediaData[groupKey], true); // Reload the group items
    showRandomWord();
}
// Function to select a random media item from the current group
function getRandomMediaItemFromGroup() {
    if (currentGroupItems.length === 0) {
        currentGroupItems = __spreadArray([], groupedMediaData["Length_".concat(currentGroupIndex)], true); // Reload the group when it's exhausted
    }
    // Select a random word from the current group
    var randomIndex = Math.floor(Math.random() * currentGroupItems.length);
    var selectedItem = currentGroupItems.splice(randomIndex, 1)[0]; // Remove the item from the current group
    return selectedItem;
}
// Function to show a random word from the selected group
function showRandomWord() {
    currentMedia = getRandomMediaItemFromGroup();
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
        answerButton.textContent = "Next"; //"OK"
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
// Load the media data when the page loads
loadMediaData();
