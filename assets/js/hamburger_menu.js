/* DOCUMENT INFORMATION
	- Document: JS assets for Portfolio
	- Version:  1
	- Author:   Anthony BARNOIN
*/

let hamburger = document.getElementById("menu-hamburger");
let headerWrapper = document.querySelector("header .wrapper");

let navLinks = document.getElementsByClassName("nav-link");

hamburger.addEventListener("change", function () {
  if (this.checked) {
    return (headerWrapper.style.display = "block");
  }
  return (headerWrapper.style.display = "none");
});

/**
 * This function close the header menu when click on one nav link (only on mobile devices).
 */
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = () => {
    if (hamburger.checked) {
      hamburger.checked = false;
      headerWrapper.style.display = "none";
    }
  };
}
