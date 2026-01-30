import { getInfoLinks, getParkData } from "./parkService.mjs";
import { setParkIntro, setParkInfo} from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init () {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo();
  
}
init();
  

