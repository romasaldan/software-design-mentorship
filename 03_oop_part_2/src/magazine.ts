import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    private _title: string;
    protected pages: Pages;
    constructor(title: string, pages: Pages) {
        super();

        this._title = title;
        this.pages = pages;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    toString() {
        return `Magazine: ${this._title} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
