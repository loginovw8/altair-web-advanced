import { BookInterface } from "./BookInterface";
import { eReaderInterface } from "./eReaderInterface";

export class eReaderAdapter implements BookInterface {
    private reader: eReaderInterface;

    constructor(reader: eReaderInterface) {
        this.reader = reader;
    }

    open(): void {
        this.reader.turnOn();
    }

    turnPage(): void {
        this.reader.pressNextButton();
    }
}