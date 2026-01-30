import { getInfoLinks, getParkData } from "./parkService.mjs";
import { setParkIntro, setParkInfo} from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init () {
  (async () => {
  const parkData = await getParkData();
  getInfoLinks(parkData);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo();
  })();
}
init();
  

