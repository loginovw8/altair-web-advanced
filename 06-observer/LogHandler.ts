import { Observer } from "./services/Observer";

export class LogHandler implements Observer {
    handle() {
        console.log('logging...');
    }
}