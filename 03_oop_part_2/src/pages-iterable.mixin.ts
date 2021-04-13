import { Pages } from "./pages";

type Constructor = new (...args: any[]) => {};

export function PagesIterablereMixin<T extends Constructor>(superclass: T) {
  return class extends superclass {
    protected pages!: Pages; 

    * [Symbol.iterator]() {
      for (let i = 0; i < this.pages.pages.length; i++) {
        yield this.pages.pages[i]
      }
    }
  }
}