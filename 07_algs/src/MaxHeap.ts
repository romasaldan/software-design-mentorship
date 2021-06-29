import {Comparator} from './Comparator';

export class MaxHeap<T> {
    private comparator: Comparator<T>;
    private items: T[] = [];
    constructor(comparator: Comparator<T>) {
        this.comparator = comparator;
    }

    insert(element: T) {
        this.items.push(element);

        if (this.items.length > 1) {
            let current = this.items.length - 1;

            while (
                current > 0 &&
                this.comparator.isLess(this.items[Math.floor((current - 1) / 2)], this.items[current])
            ) {
                [this.items[Math.floor((current - 1) / 2)], this.items[current]] = [
                    this.items[current],
                    this.items[Math.floor((current - 1) / 2)],
                ];

                current = Math.floor((current - 1) / 2);
            }
        }

        return this;
    }

    remove(): T {
        const minElement = this.items[0];

        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();

        let current = 0;
        let leftIndex = 2 * current + 1;
        let rightIndex = 2 * current + 2;

        while (
            this.items[leftIndex] &&
            this.items[rightIndex] &&
            (this.comparator.isLess(this.items[current], this.items[leftIndex]) ||
                this.comparator.isLess(this.items[current], this.items[rightIndex]))
        ) {
            if (this.comparator.isLess(this.items[rightIndex], this.items[leftIndex])) {
                [this.items[current], this.items[leftIndex]] = [this.items[leftIndex], this.items[current]];
                current = leftIndex;
            } else {
                [this.items[current], this.items[rightIndex]] = [this.items[rightIndex], this.items[current]];
                current = rightIndex;
            }

            leftIndex = current * 2 + 1;
            rightIndex = current * 2 + 2;
        }

        if (
            this.items[rightIndex] === undefined &&
            this.items[leftIndex] &&
            this.comparator.isLess(this.items[current], this.items[leftIndex])
        ) {
            [this.items[current], this.items[leftIndex]] = [this.items[leftIndex], this.items[current]];
        }

        return minElement;
    }

    getMaximumElement() {
        return this.items[0];
    }
}
