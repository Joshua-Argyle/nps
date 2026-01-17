import { getParkData } from "./parkService.mjs";
import { setParkIntro, setParkInfo} from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";
const parkData = getParkData();


  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo();
  

