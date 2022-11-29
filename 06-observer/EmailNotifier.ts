import { Observer } from "./services/Observer";

export class EmailNotifier implements Observer {
    handle(): void {
        console.log('fire off an email');
    }
}