/* DOCUMENT INFORMATION
	- Document: JS assets for Portfolio
	- Version:  1
	- Author:   Anthony BARNOIN
*/

// Get all modals
let modals = document.getElementsByClassName("modal");

// Get all buttons that open modals
let openBtns = document.getElementsByClassName("open-modal");

// Get the elements that close modals
let closesBtns = document.getElementsByClassName("modal-close");

/**
 * This function open modal who data-project HTML attribute is equal to given project
 *
 * @param {String} $project The project name
 */
function openModal($project) {
  for (let i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute("data-project") === $project) {
      modals[i].style.display = "block";
      document.body.style.overflow = "hidden";
    }
  }
}

/**
 * This function close all modals
 */
function closeModals() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
  document.body.style.overflow = "auto";
}

//define onclick open modal event
for (let i = 0; i < openBtns.length; i++) {
  openBtns[i].onclick = function () {
    openModal(openBtns[i].getAttribute("data-project"));
  };
}

//define onclick close modal event
for (let i = 0; i < closesBtns.length; i++) {
  closesBtns[i].onclick = function () {
    closeModals();
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      closeModals();
    }
  }
};
