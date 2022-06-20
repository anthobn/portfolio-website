/* DOCUMENT INFORMATION
	- Document: JS assets for Portfolio
	- Version:  1
	- Author:   Anthony BARNOIN
*/

const hamburger = document.getElementById("menu-hamburger");
let headerWrapper = document.querySelector("header .wrapper");

hamburger.addEventListener("change", function () {
  if (this.checked) {
    return (headerWrapper.style.display = "block");
  }
  return (headerWrapper.style.display = "none");
});
