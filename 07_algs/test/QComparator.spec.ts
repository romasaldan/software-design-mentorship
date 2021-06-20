import {QComparator} from '../src/QComparator';
import {QElement} from '../src/QElement';

describe('QComparator', () => {
    it('should be true if first elem less than second', () => {
        const q1 = new QElement(() => {}, 150);
        const q2 = new QElement(() => {}, 250);
        const qComparator = new QComparator();

        expect(qComparator.isLess(q1, q2)).toBe(true);
    });
});
