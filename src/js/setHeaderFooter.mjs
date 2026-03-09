import { getParkData } from "./parkService.mjs";
import { enableNavigation } from "./navigation.mjs";
const parkData = await getParkData();
export function setHeaderFooter() {


 function setHeaderInfo(data) {

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
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  

  document.querySelector("head > title").textContent = data.fullName;

  document.querySelector(".hero-banner").innerHTML = 
  parkInfoTemplate(data);

  const nav = document.querySelector(".nav-section")
  const globalNav = `
      <nav class="hidden global-nav">
          <p class="global-nav__section-heading">Explore this Park</p>
          <ul class="global-nav__list">
            <li>
              <div class="global-nav__split-button">
                <a class="headerSubMenu" href="#">Plan Your Visit</a>
                <button class="global-nav__split-button__toggle" id="visit">
                  <span class = "hidden black"
                    >Toggle submenu for Plan Your Visit</span
                  >
                  <svg class="icon arrowDownVisit" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
            </li>
            <div class="subMenuPlanYourVisit">
            <li class="subMenuLinks"><a href="#">Find a Park</a></li>
            <li class="subMenuLinks"><a href="#">Events</a></li>
            <li class="subMenuLinks"><a href="#">Passes</a></li>
            <li class="subMenuLinks"><a href="#">Trip Ideas</a></li>
            </div>
          </ul>
          <ul class="global-nav__list">
            <li>
              <div class="global-nav__split-button">
                <a class="headerSubMenu" href="#">Learn & Explore</a>
                <button class="global-nav__split-button__toggle" id="explore">
                  <span class = "hidden black"
                    >Toggle submenu for Learn and Explore</span
                  >
                  <svg class="icon subMenuIcon arrowDownExplore" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
            </li>
            <div class="subMenuPlanExplore">
            <li class="subMenuLinks"><a href="#">About Us</a></li>
            <li class="subMenuLinks"><a href="#">Discover History</a></li>
            <li class="subMenuLinks"><a href="#">Explore Nature</a></li>
            <li class="subMenuLinks"><a href="#">Kids</a></li>
            </div>
          </ul>
          <ul class="global-nav__list">
            <li>
              <div class="global-nav__split-button">
                <a class="headerSubMenu" href="#">Get Involved</a>
                <button class="global-nav__split-button__toggle" id="involved">
                  <span class = "hidden black"
                    >Toggle submenu for Get Involved</span
                  >
                  <svg class="icon subMenuIcon arrowDownInvolve" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
            </li>
            <div class="subMenuPlanInvolve">
            <li class="subMenuLinks"><a href="#">Donate</a></li>
            <li class="subMenuLinks"><a href="#">Partner</a></li>
            <li class="subMenuLinks"><a href="#">Volunteer</a></li>
            <li class="subMenuLinks"><a href="#">Work for Us</a></li>
            </div>
          </ul>
        </nav>
      `
      nav.innerHTML = globalNav;
      enableNavigation();
}
 function setParkFooter(addressData, phoneData) {
  function footerTemplate(infoAddress, infoPhone) {
      return `<h2>CONTACT INFO</h2>
        <dl>
          <dt>Mailing Address:</dt>
          <dd>
            <div class="black">${infoAddress.line1}</div>
            <div class="black">${infoAddress.city}, ${infoAddress.stateCode} ${infoAddress.postalCode}</div> 
          </dd>
          <dt>Phone:</dt>
          <dd>${infoPhone.phoneNumber}</dd>
        </dl>`}
        document.querySelector("#park-footer").innerHTML = 
    footerTemplate(addressData, phoneData);
      
}
 setHeaderInfo(parkData);
 setParkFooter(parkData.addresses[1], parkData.contacts.phoneNumbers[0])
}