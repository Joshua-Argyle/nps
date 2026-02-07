import { getParkData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getJson } from "./parkService.mjs";


async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);
  const parkCode = parkData.parkCode;
  const alerts = await getAlerts(parkCode);
  const visitorCenters = await getVisitorCenterInfo(parkCode);

  setAlerts(alerts);
  setVisitorCenter(visitorCenters);
  setActivities(parkData);
}

async function getAlerts(parkCode) {
  const data = await getJson(`alerts?parkCode=${parkCode}`);
  return data.data;
}

async function getVisitorCenterInfo(parkCode) {
  const data = await getJson(`visitorcenters?parkCode=${parkCode}`);
  return data.data;
}

function setActivities(specificParkData) {
    

  function activities(info) {

    return `<li>${info.name}</li>`;
  }

  const html = specificParkData.activities.map(activities).join("");
  document.querySelector(".activity-list").innerHTML = html;
}

function setVisitorCenter(specificParkData) {
    
  function vcenter(info) {

    return `<li class="vcenterz">
            <div><h3 class="vcenter-item-header">${info.name}</h3>
            <p class="item-content">${info.description}</p></div>
        </li>`;
  }

  const html = specificParkData.map(vcenter).join("");
  document.querySelector(".vcenter").innerHTML = html;
}

  function setAlerts(specificParkData) {
    
  function Alert(info) {
    let id = "";
    if (info.category === "Caution") {
        id = "caution";
    }
    else if (info.category === "Information") {
        id = "information";
    }
    else if (info.category === "Park Closure") {
        id = "closure";
    }
    else {
        id = "danger";
    }
    return `<li class="alert">
            <svg class="alert-svg" focusable="false" aria-hidden="true"><use xlink:href="/images/sprite.symbol.svg#alert-${id}"></use></svg>
            <div><h3 class="alert-item-header ${id}">${info.title}</h3>
            <p class="item-content">${info.description}</p></div>
        </li>`;
  }

  const html = specificParkData.map(Alert).join("");
  document.querySelector(".alert-item").innerHTML = html;
}

init();