import { HomeChecker } from "./services/HomeChecker";
import { HomeStatus } from "./services/HomeStatus";

export class Lights extends HomeChecker {
    check(home: HomeStatus): void {
        if (!home.lightsOff) {
            throw new Error('The lights are not off!');
        }

        this.next(home);
    }
}