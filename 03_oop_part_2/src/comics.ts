import { Item } from "./item";
import { Pages } from "./pages";

export class Comics extends Item {
  private title: string;
  protected pages: Pages;
  private author: string;
  private artist: string;
  constructor(title: string, author: string, artist: string, pages: Pages) {
    super();

    this.title = title;
    this.pages = pages;
    this.author = author;
    this.artist = artist;
  }

  toString() {
    return ''
  }
}