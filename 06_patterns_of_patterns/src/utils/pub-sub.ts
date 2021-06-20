interface ISubscribers {
    [key: string]: Function[];
}

export class PubSub {
    private subscribers: ISubscribers = {};

    public subscribe(event: string, callback: Function) {
        if (this.subscribers[event]) {
            this.subscribers[event].push(callback);
        } else {
            this.subscribers[event] = [callback];
        }
    }

    public notify<T>(event: string, details?: T) {
        this.subscribers[event].forEach((subscriber) => subscriber(details));
    }
}
