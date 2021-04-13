import {Page} from './page'

export class Pages {
  protected _pages: Array<Page>
  constructor(pages: Array<Page>) {
    this._pages = pages;
  }

  get pages() {
    return this._pages
  }
}