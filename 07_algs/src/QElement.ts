type Callback = (...args: any[]) => any;

export class QElement {
    public callback: Callback;
    public priority: number;
    constructor(callback: Callback, priority: number) {
        this.callback = callback;
        this.priority = priority;
    }
}
