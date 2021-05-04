import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
    private _title: string;
    private _author: string;
    protected pages: Pages;
    constructor(title: string, author: string, pages: Pages) {
        super();

        this._title = title;
        this._author = author;
        this.pages = pages;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    toString() {
        return `Book: ${this._title} by ${this._author} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
