// Array of 25 reasons
const reasons = [
    "Your laugh",
    "Your love for your best friends",
    "Your efforts to make others happy",
    "Your love for animals",
    "Your love for different foods",
    "Your love for your siblings even though you say you hate them",
    "Your efforts to help everyone",
    "Your smile",
    "Your silly jokes",
    "Your designing skills (man I love that)",
    "Your courage to stand up for others",
    "Your gentle touch that reminds me that I'm not alone",
    "Your low humour (just kidding)",
    "Your ability to make me feel special",
    "Your willingness to try new things",
    "The way you make me a better person",
    "Your ability to make me feel loved",
    "The sweet memories you gave me",
    "The way you support others' dreams",
    "The way you celebrate others' success",
    "Your ability to forgive and move on",
    "Your kindness and compassion for others",
    "Your genuine love and affection",
    "Your gentle and loving spirit",
    "The way you look perfect without even having to try"
];

// Variables to keep track of the current reason
let currentReasonIndex = 0;

// Elements from the HTML
const reasonElement = document.getElementById("reason");
const nextButton = document.getElementById("next-button");

// Function to show the next reason
function showNextReason() {
    if (currentReasonIndex < reasons.length) {
        reasonElement.textContent = reasons[currentReasonIndex];
        currentReasonIndex++;
    } else {
        reasonElement.textContent = "That’s it! I could go on forever, but these are just 25 reasons why I love you.";
        nextButton.style.display = "none";
    }
}

// Add event listener to the button
nextButton.addEventListener("click", showNextReason);
