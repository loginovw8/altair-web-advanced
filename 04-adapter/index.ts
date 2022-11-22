import { BookInterface } from './services/BookInterface';

class Book implements BookInterface {
    open(): void {
        console.log('opening the paper book');
    }

    turnPage(): void {
        console.log('turning the page of the paper book');
    }
}
