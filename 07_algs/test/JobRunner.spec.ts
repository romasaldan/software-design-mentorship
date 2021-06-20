import {JobRunner} from '../src/JobRunner';
import {MaxHeap} from '../src/MaxHeap';
import {QComparator} from '../src/QComparator';
import {QElement} from '../src/QElement';

const module = {
    someMethod(_arg: any) {},
};
class TestJobRunner extends JobRunner {
    public runNext() {
        let nextJob: QElement = this.priorityQueue.remove();

        nextJob.callback();
    }
}

describe('JobRunner', () => {
    let jobRunner: TestJobRunner;
    let methodSpy: jest.SpyInstance<void, [_arg: any]>;
    let q1: QElement;
    let q2: QElement;
    let q3: QElement;

    beforeEach(() => {
        jobRunner = new TestJobRunner(new MaxHeap<QElement>(new QComparator()));
        methodSpy = jest.spyOn(module, 'someMethod');
        q1 = new QElement(() => module.someMethod(150), 150);
        q2 = new QElement(() => module.someMethod(250), 250);
        q3 = new QElement(() => module.someMethod(50), 50);
        jobRunner.push(q1).push(q2).push(q3);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('callback with highest priority should be called first', () => {
        jobRunner.runNext();

        expect(methodSpy).toBeCalledWith(250);
    });

    it('all jobs should be called after run method is called', () => {
        jobRunner.run();

        expect(methodSpy).toHaveBeenCalledWith(150);
        expect(methodSpy).toHaveBeenCalledWith(250);
        expect(methodSpy).toHaveBeenCalledWith(50);
        expect(methodSpy).toHaveBeenCalledTimes(3);
    });

    it('all callbacks should be called according to the queue', () => {
        jobRunner.runNext();
        expect(methodSpy).toHaveBeenLastCalledWith(250);

        jobRunner.runNext();
        expect(methodSpy).toHaveBeenLastCalledWith(150);

        jobRunner.runNext();
        expect(methodSpy).toHaveBeenLastCalledWith(50);
    });
});
