import {CurrencyModel} from '../models/currency-model';
import {PubSub} from '../utils/pub-sub';

export abstract class View extends PubSub {
    protected abstract amountInputs: Element[];
    protected abstract priceInputs: Element[];
    protected model: CurrencyModel;

    constructor(model: CurrencyModel) {
        super();
        this.model = model;

        this.model.subscribe('model-changed', this.show.bind(this));
    }

    protected get wrapper() {
        const wrapper = document.getElementById('currency-view');

        if (wrapper) {
            return wrapper;
        } else {
            const newWrapper = document.createElement('div');
            newWrapper.setAttribute('id', 'currency-view');

            return newWrapper;
        }
    }

    protected get rootElement() {
        return document.getElementById('root');
    }

    public show() {
        if (this.rootElement) {
            const wrapper = this.wrapper;
            wrapper.innerHTML = this.getTemplate();

            this.rootElement.append(wrapper);

            this.addListeners();
        }
    }

    protected addListeners() {
        this.amountInputs.forEach((input) => input.addEventListener('change', this.onCurrencyAmountEdited));
        this.priceInputs.forEach((input) => input.addEventListener('change', this.onCurrencyPriceEdited));
    }

    protected removeListeners() {
        this.amountInputs.forEach((input) => input.removeEventListener('change', this.onCurrencyAmountEdited));
        this.priceInputs.forEach((input) => input.removeEventListener('change', this.onCurrencyPriceEdited));
    }

    private onCurrencyAmountEdited = (e: Event) => {
        this.notify('currency-amount-edited', {
            currency: (e.target as HTMLInputElement).dataset.currency,
            amount: (e.target as HTMLInputElement).value,
        });
    };

    private onCurrencyPriceEdited = (e: Event) => {
        this.notify('currency-price-edited', {
            currency: (e.target as HTMLInputElement).dataset.currency,
            price: (e.target as HTMLInputElement).value,
        });
    };

    protected abstract getTemplate(): string;

    public hide() {
        const wrapper = this.wrapper;
        this.removeListeners();
        this.rootElement?.removeChild(wrapper);
    }
}
