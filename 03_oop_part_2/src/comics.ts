import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    private _title: string;
    protected pages: Pages;
    private _author: string;
    private _artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();

        this._title = title;
        this.pages = pages;
        this._author = author;
        this._artist = artist;
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

    get artist(): string {
        return this._artist;
    }

    set artist(title: string) {
        this._artist = title;
    }

    toString() {
        return `Comics: ${this._title} by ${this._author}, the artist is ${
            this._artist
        }, number of pages: ${this.pages.getPagesAmount()}`;
    }
}
