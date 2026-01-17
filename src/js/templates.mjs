import { getParkInfoLinks } from "./parkService.mjs"; 
const parkInfoLinksData = getParkInfoLinks();


export function setParkIntro(data) {
  function introTemplate(info) {
  return `<h1>${info.fullName}</h1>
          <p class="intro-p" >${info.description}</p>`;}

          document.querySelector(".intro").innerHTML =
          introTemplate(data);
  
}
export function setParkInfo() {
  function mediaCardTemplate(info) {
    return `<section class="container">
            <img class="infoImage" src="${info.image}" alt="${info.name}">
            <a class="black head-links" href="#">${info.name}</a>
            <p class="info-p" >${info.description}</p></section>`;
  }

  const info = parkInfoLinksData.map(parkInfo => mediaCardTemplate(parkInfo)).join("");
  document.querySelector(".info").innerHTML = info;
}
