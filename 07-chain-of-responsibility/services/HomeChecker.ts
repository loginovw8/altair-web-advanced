import { HomeStatus } from "./HomeStatus";

// strict property init

export abstract class HomeChecker {
    protected successor: HomeChecker;

    setSuccessor(successor: HomeChecker) {
        this.successor = successor;
    }

    getSuccessor(): HomeChecker {
        return this.successor;
    }

    next(status: HomeStatus): void {
        if (this.successor) {
            this.successor.check(status);
        }
    }

    abstract check(home: HomeStatus): void;
}