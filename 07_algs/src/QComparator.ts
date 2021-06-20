import {Comparator} from './Comparator';
import {QElement} from './QElement';

export class QComparator implements Comparator<QElement> {
    isLess(qElem1: QElement, qElem2: QElement) {
        return qElem1.priority < qElem2.priority;
    }
}
