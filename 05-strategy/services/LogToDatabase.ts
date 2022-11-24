import { Logger } from "./Logger";

export class LogToDatabase implements Logger {
    log(message: string): void {
        console.log('Log the data to the database');
    }
}