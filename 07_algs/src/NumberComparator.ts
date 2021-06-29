import {Comparator} from './Comparator';

export class NumberComparator implements Comparator<number> {
    isLess(a: number, b: number) {
        return a < b;
    }
}
