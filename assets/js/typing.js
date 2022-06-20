/* DOCUMENT INFORMATION
	- Document: JS assets for Portfolio
	- Version:  1
	- Author:   Anthony BARNOIN
*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "frontend",
  "VueJS",
  "ReactJS",
  "backend",
  "NodeJS",
  "hard",
  "fun",
  "LIFE",
];
const showTxtDelay = 2500; //the delay who the text needs be showed
const emptyTxtDelay = showTxtDelay / 2; //the delay who the text zone is empty
const eachTypingDelay = 200; //the delay between two typing
const eachErasingDelay = 100; //the delay between two erasing

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }

    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, eachTypingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, showTxtDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }

    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );

    charIndex--;
    setTimeout(erase, eachErasingDelay);
  } else {
    cursorSpan.classList.remove("typing");

    //go to next word
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }

    setTimeout(type, emptyTxtDelay);
  }
}

// On DOM Load initiate the effect
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) {
    setTimeout(type, emptyTxtDelay);
  }
});
