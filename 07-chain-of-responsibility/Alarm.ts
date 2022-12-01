import { HomeChecker } from "./services/HomeChecker";
import { HomeStatus } from "./services/HomeStatus";

export class Alarm extends HomeChecker {
    check(home: HomeStatus): void {
        if (!home.alarmOn) {
            throw new Error('The alarm is not on!');
        }

        this.next(home);
    }
}