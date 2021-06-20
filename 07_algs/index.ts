import {JobRunner} from './src/JobRunner';
import {MaxHeap} from './src/MaxHeap';
import {QComparator} from './src/QComparator';
import {QElement} from './src/QElement';

const jobRunner = new JobRunner(new MaxHeap<QElement>(new QComparator()));

for (let i = 0; i < 10000; i++) {
    const priority = Math.floor(Math.random() * 10000);
    const callback = () => console.log(i, priority);
    jobRunner.push(new QElement(callback, priority));
}

jobRunner.run();
