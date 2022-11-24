import { Logger } from "./services/Logger";

class App {
    log(message: string, logger: Logger): void {
        logger.log(message);
    }
}
