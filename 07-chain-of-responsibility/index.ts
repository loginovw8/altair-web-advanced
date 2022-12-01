import { Alarm } from "./Alarm";
import { Lights } from "./Lights";
import { Locks } from "./Locks";
import { HomeStatus } from "./services/HomeStatus";

let locks = new Locks();
let lights = new Lights();
let alarm = new Alarm();

const home = new HomeStatus();
