export interface PriorityQueue<T> {
    insert(element: T): void;
    remove(): T;
    getMaximumElement(): T;
}
