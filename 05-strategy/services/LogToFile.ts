import { Logger } from "./Logger";

export class LogToFile implements Logger {
    log(message: string): void {
        console.log('Log the data to a file');
    }
}