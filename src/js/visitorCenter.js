import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";



function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);

}
async function init() {
  const parkData = await getParkData();
  const id = getParam("id");
  const centerDetails = await getParkVisitorCenterDetails(id);
  setHeaderFooter(parkData);
  insertInfo(centerDetails);
}

function insertInfo(data) {
    const h1 = document.querySelector(".vc-name");
    const visitorHero = document.querySelector(".herov");
    const visitorDesc = document.querySelector(".fg");
    const visitorInfo = document.querySelector("#vinfo");
    const directions = document.querySelector(".directions");
    const email = document.querySelector(".email");
    const phone = document.querySelector(".phone");


    const gallery = listTemplate(data.images, vcImageTemplate, "gallery-images");
    const amenities = listTemplate(data.amenities, vcAmenityTemplate, "");

    h1.insertAdjacentHTML("beforeend", `${data.name}`);
    visitorHero.insertAdjacentHTML("afterbegin", `<img src="${data.images[0].url}" alt="${data.images[0].altText}">`);
    visitorDesc.insertAdjacentHTML("afterbegin", `${data.images[0].caption} <br>${data.images[0].credit}`);
    visitorInfo.insertAdjacentHTML("beforeend", `${data.description}`);
    directions.insertAdjacentHTML("beforeend", `${data.directionsInfo}`);
    phone.insertAdjacentHTML("beforeend", `${data.contacts.phoneNumbers[0].phoneNumber}`);
    email.insertAdjacentHTML("beforeend", `${data.contacts.emailAddresses[0].emailAddress}`);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", gallery);
    document.querySelector('.vc-amenities').insertAdjacentHTML("beforeend", amenities);
    document.querySelector('.vc-addresses__physical').insertAdjacentHTML("beforeend", vcAddressFunction(data, 0));
    document.querySelector('.vc-addresses__mailing').insertAdjacentHTML("beforeend", vcAddressFunction(data, 1));

}
function listTemplate(data, contentTemplate, id) {
  const html = data.map(contentTemplate);
  return `<ul id="${id}">${html.join("")}</ul>`;
}
function vcImageTemplate(data) {
  return `<li class="gallery-image" ><img src="${data.url}" alt="${data.altText}"><li>`;
}
function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

function vcAddressFunction(data, index) {
    return `<address>
            ${data.addresses[index].city}<br />
            ${data.name}, ${data.addresses[index].countryCode} ${data.addresses[index].postalCode}
        </address>`
}

init();
