import { Observer } from "./services/Observer";
import { Subject } from "./services/Subject";
import { User } from "./User";

export class UsersRepository implements Subject {
    private observers: Observer[];

    constructor() {
        this.observers = [];
    }

    createUser(user: User): void {
        // write user data to the database
        this.notify();
    }

    attach(observable: Observer): void {
        this.observers.push(observable);
    }

    attachMany(observable: Observer[]): void {
        observable.forEach(observer => {
            this.attach(observer);
        });
    }

    detach(index: number): void {
        this.observers.splice(index, 1);
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.handle();
        });
    }
}