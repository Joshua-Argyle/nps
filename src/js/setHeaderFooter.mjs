import { getParkData } from "./parkService.mjs";
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