import {PubSub} from '../utils/pub-sub';

export class Back extends PubSub {
    private wrapper = document.createElement('div');

    constructor() {
        super();
    }

    private get backButton() {
        return document.getElementById('back');
    }

    private get rootElement() {
        return document.getElementsByTagName('body')[0];
    }

    public show() {
        this.wrapper.innerHTML = this.getTemplate();
        this.rootElement?.append(this.wrapper);

        this.addListeners();
    }

    public hide() {
        this.removeListeners();
        this.rootElement?.removeChild(this.wrapper);
    }

    private addListeners() {
        this.backButton?.addEventListener('click', this.onBackClicked);
    }

    private removeListeners() {
        this.backButton?.removeEventListener('click', this.onBackClicked);
    }

    private onBackClicked = (e: Event) => {
        this.notify('back-clicked');
    };

    private getTemplate(): string {
        return `<button id="back">Back</button>`;
    }
}
