

export function enableNavigation() {

const button = document.querySelector("#global-nav-toggle");
const nav = document.querySelector(".global-nav");
const closeIcons = document.querySelector(".nav_toggle_closed");
const openIcons = document.querySelector(".nav_toggle_opened");

button.addEventListener('click', () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle('nav-open');

  closeIcons.classList.toggle('hidden')
  openIcons.classList.toggle('hidden')

  
  if (nav.classList.contains('nav-open')) {
      button.setAttribute('aria-expanded', 'false');
  }
  else {
    button.setAttribute('aria-expanded', 'true');
  }
})
  
const openSubVisit = document.querySelector(".subMenuPlanYourVisit");
const subButtonVisit = document.querySelector("#visit");
const openSubExplore = document.querySelector(".subMenuPlanExplore")
const subButtonExplore = document.querySelector("#explore");
const openSubInvolved = document.querySelector(".subMenuPlanInvolve");
const subButtonInvolved = document.querySelector("#involved");
const arrowVisit = document.querySelector(".arrowDownVisit");
const arrowExplore = document.querySelector(".arrowDownExplore");
const arrowInvolve = document.querySelector(".arrowDownInvolve");

function hideSubMenu(button, toggledElement, arrow) {
button.addEventListener('click', () => {

  toggledElement.classList.toggle("open");

  arrow.classList.toggle("arrowUp");
  
  if (toggledElement.classList.contains('closed')) {
      toggledElement.setAttribute('aria-expanded', 'false');
  }
  else {
    toggledElement.setAttribute('aria-expanded', 'true');
  }

})}

hideSubMenu(subButtonVisit, openSubVisit, arrowVisit);
hideSubMenu(subButtonExplore, openSubExplore, arrowExplore);
hideSubMenu(subButtonInvolved, openSubInvolved, arrowInvolve);
}