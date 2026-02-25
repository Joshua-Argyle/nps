import { getInfoLinks, getParkData } from "./parkService.mjs";
import { setParkIntro, setParkInfo} from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init () {
  const parkData = await getParkData();
  getInfoLinks(parkData);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo();
}
init();
const button = document.querySelector("#global-nav-toggle")
const nav = document.querySelector(".global-nav")
const closeIcons = document.querySelector(".nav_toggle_closed")
const openIcons = document.querySelector(".nav_toggle_opened")


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
  

