import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


function parkInfoTemplate(info) {
  return `<img class="hero" src="${info.images[0].url}" alt="Hero Banner" />
  <div class="hero-banner__content">
  <a class="hero_banner_title" href="#">${info.name}</a>
  <p class="hero_banner_subtitle">
            <span>${info.designation}</span>
            <span>${info.states}</span>
          </p>
    </div>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.querySelector("head > title").textContent = parkData.fullName;

document.querySelector(".hero-banner").innerHTML = 
 parkInfoTemplate(parkData);
