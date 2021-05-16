import {PubSub} from '../utils/pub-sub';

export class Form extends PubSub {
    private selectedViewMode: string = 'input';
    private selectedModelMode: string = 'single';
    private wrapper = document.createElement('div');

    constructor() {
        super();
    }

    private get goToButton() {
        return document.getElementById('toconverter');
    }

    private get rootElement() {
        return document.getElementById('root');
    }

    private get viewInputs() {
        return document.getElementsByName('view');
    }

    private get modelInputs() {
        return document.getElementsByName('model');
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
        this.viewInputs.forEach((element) => element.addEventListener('change', this.onViewChanged));
        this.modelInputs.forEach((element) => element.addEventListener('change', this.onModelChanged));
        this.goToButton?.addEventListener('click', this.onSelected);
    }

    private removeListeners() {
        this.viewInputs.forEach((element) => element.removeEventListener('change', this.onViewChanged));
        this.modelInputs.forEach((element) => element.removeEventListener('change', this.onModelChanged));
        this.goToButton?.removeEventListener('click', this.onSelected);
    }

    private onViewChanged = (e: Event) => {
        this.selectedViewMode = (e.target as HTMLInputElement).value;
    };

    private onModelChanged = (e: Event) => {
        this.selectedModelMode = (e.target as HTMLInputElement).value;
    };

    private onSelected = () => {
        this.notify<{model: string; view: string}>('selected', {
            model: this.selectedModelMode,
            view: this.selectedViewMode,
        });
    };

    private getCheckboxState(mode: string, value: string) {
        return mode == value ? 'checked' : '';
    }

    private getTemplate(): string {
        return `<div>
                    <div>Choose type view</div>
                    <input type="radio" ${this.getCheckboxState(
                        this.selectedViewMode,
                        'input'
                    )} id="input" name="view" value="input">
                    <label for="input">Input</label><br>
                    <input type="radio" ${this.getCheckboxState(
                        this.selectedViewMode,
                        'range'
                    )} id="range" name="view" value="range">
                    <label for="range">Range</label><br>
                </div>
                <div>
                    <div>Choose model type</div>
                    <input type="radio" id="single" ${this.getCheckboxState(
                        this.selectedModelMode,
                        'single'
                    )} name="model" value="single">
                    <label for="single">Single Amount</label><br>
                    <input type="radio" id="multiple" ${this.getCheckboxState(
                        this.selectedModelMode,
                        'multiple'
                    )} name="model" value="multiple">
                    <label for="multiple">Multiple Amount</label><br>
                </div>
                <br>
                <button id="toconverter">Go to currency converter</button>`;
    }
}
