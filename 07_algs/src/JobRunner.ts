import {PriorityQueue} from './PriorityQueue';
import {QElement} from './QElement';

export class JobRunner {
    protected priorityQueue: PriorityQueue<QElement>;
    constructor(priorityQueue: PriorityQueue<QElement>) {
        this.priorityQueue = priorityQueue;
    }

    push(qElement: QElement) {
        this.priorityQueue.insert(qElement);

        return this;
    }

    run() {
        let nextJob: QElement = this.priorityQueue.remove();
        const startTime = Date.now();
        while (nextJob) {
            nextJob.callback();

            nextJob = this.priorityQueue.remove();
        }

        console.log('execution time - ', Date.now() - startTime);
    }
}
