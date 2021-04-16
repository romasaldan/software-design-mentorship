import { Page } from './page';
import { Pages } from './pages';

type Constructor = new (...args: any[]) => {};

export function PagesIterablereMixin<T extends Constructor>(superclass: T) {
    return class extends superclass {
        protected pages!: Pages;

        *[Symbol.iterator]() {
            for (let i = 0; i < this.pages.pages.length; i++) {
                const page: Page = this.pages.pages[i];
                const pageString: string = String(page);

                page.toString = () => {
                    return `${this}, ${pageString}`;
                };

                yield page;
            }
        }
    };
}
