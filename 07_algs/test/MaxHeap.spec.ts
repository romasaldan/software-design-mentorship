import {Comparator} from '../src/Comparator';
import {MaxHeap} from '../src/MaxHeap';
import {NumberComparator} from '../src/NumberComparator';
type testItem = {amount: number; name: string};

describe('Heap', () => {
    let heap: MaxHeap<testItem | number> | null = null;
    beforeEach(() => {
        heap = null;
    });
    const testComparator: Comparator<testItem> = {
        isLess(a, b) {
            return a.amount < b.amount;
        },
    };

    it('1) smallest elem should be returned for heap', () => {
        heap = new MaxHeap<number>(new NumberComparator());
        heap.insert(84).insert(44).insert(1);

        expect(heap.getMaximumElement()).toBe(84);
    });

    it('2) smallest elem should be returned when deleting', () => {
        heap = new MaxHeap(new NumberComparator());
        heap.insert(84).insert(44).insert(1);

        expect(heap.remove()).toBe(84);
    });

    it('3) smallest elem should be returned after deleting', () => {
        heap = new MaxHeap(new NumberComparator());
        heap.insert(84).insert(44).insert(3).insert(10).insert(1);
        heap.remove();
        expect(heap.getMaximumElement()).toBe(44);
    });

    it('4) smallest elem should be returned', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 15, name: 'second-min'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'});

        expect(heap.getMaximumElement()).toEqual({amount: 87, name: 'max'});
    });

    it('5) smallest elem should be returned after deleting', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'})
            .insert({amount: 15, name: 'second-min'});

        expect(heap.remove()).toEqual({amount: 87, name: 'max'});
    });

    it('6) second smallest elem should be returned after deleting', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'})
            .insert({amount: 15, name: 'second-min'});

        heap.remove();

        expect(heap.getMaximumElement()).toEqual({amount: 35, name: 'second max'});
    });

    it('7) second smallest elem should be returned after deleting', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'})
            .insert({amount: 15, name: 'second-min'});

        heap.remove();

        expect(heap.getMaximumElement()).toEqual({amount: 35, name: 'second max'});
    });

    it('8) return the last element when everything is removed', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'})
            .insert({amount: 15, name: 'second-min'});

        heap.remove();
        heap.remove();
        heap.remove();

        expect(heap.remove()).toEqual({amount: 5, name: 'min'});
    });

    it('9) undefined if no elements left', () => {
        heap = new MaxHeap<testItem>(testComparator);
        heap.insert({amount: 35, name: 'second max'})
            .insert({amount: 5, name: 'min'})
            .insert({amount: 87, name: 'max'})
            .insert({amount: 15, name: 'second-min'});

        heap.remove();
        heap.remove();
        heap.remove();
        heap.remove();

        expect(heap.remove()).toBe(undefined);
    });

    it('10) priorities should form sequence', () => {
        heap = new MaxHeap(new NumberComparator());
        const arr = [];
        for (let i = 0; i < 15; i++) {
            const priority = Math.floor(Math.random() * 10000);
            arr.push(priority);
            heap.insert(priority);
        }

        let item = heap.remove();
        const prioritiesArr = [];
        while (item) {
            prioritiesArr.push(item);
            item = heap.remove();
        }

        const isDescending = (arr: Array<number | testItem>) =>
            arr.every((el, i, self) => i === 0 || el >= self[i - 1]);

        expect(isDescending(prioritiesArr.reverse())).toBe(true);
    });

    it('11) fixed an issue with insertion', () => {
        heap = new MaxHeap(new NumberComparator());

        [9457, 6240, 4345, 5216, 8131, 3550, 8274, 9489, 3523, 1019, 5355, 836, 5787, 7879, 3522].forEach((el) =>
            heap?.insert(el)
        );

        let item = heap.remove();
        const prioritiesArr = [];
        while (item) {
            prioritiesArr.push(item);
            item = heap.remove();
        }

        const isDescending = (arr: Array<number | testItem>) =>
            arr.every((el, i, self) => i === 0 || el >= self[i - 1]);
        expect(isDescending(prioritiesArr.reverse())).toBe(true);
    });
});
