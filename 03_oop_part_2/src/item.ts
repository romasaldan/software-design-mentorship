import { PagesIterablereMixin } from './pages-iterable.mixin';

export abstract class Item extends PagesIterablereMixin(Object) {
    public abstract toString(): string;
}
