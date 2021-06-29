export interface Comparator<T> {
    isLess(a: T, b: T): boolean;
}
