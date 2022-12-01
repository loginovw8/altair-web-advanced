import { HomeChecker } from "./services/HomeChecker";
import { HomeStatus } from "./services/HomeStatus";

export class Locks extends HomeChecker {
    check(home: HomeStatus): void {
        if (!home.locked) {
            throw new Error('The doors are not locked!');
        }
        
        this.next(home);
    }
}