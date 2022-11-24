import { BookInterface } from './services/BookInterface';

class Book implements BookInterface {
    open(): void {
        console.log('opening the paper book');
    }

    turnPage(): void {
        console.log('turning the page of the paper book');
    }
}

class Person {
    item: BookInterface;

    constructor(item: BookInterface) {
        this.item = item;
    }

    read() {
        this.item.open();
        this.item.turnPage();
    }
}

const person = new Person(new Book());
person.read();