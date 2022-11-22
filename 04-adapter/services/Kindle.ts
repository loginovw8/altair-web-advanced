import { eReaderInterface } from "./eReaderInterface";

export class Kindle implements eReaderInterface {
    turnOn(): void {
        console.log('turn the Kindle on');
    }

    pressNextButton(): void {
        console.log('press the next button on the Kindle');
    }
}