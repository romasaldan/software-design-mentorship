import {REQUESTED_CURRENCY} from '../mocks/requested-currency';
import {CurrencyModel} from '../models/currency-model';
import {CurrencyRate, ModelItem} from '../types/model';
import {View} from '../views/view';

export class Controller {
    constructor(private view: View, private model: CurrencyModel) {
        this.view.subscribe('currency-amount-edited', (details: {currency: string; amount: number}) => {
            this.model.notify('currency-amount-edited', details);
        });

        this.view.subscribe('currency-price-edited', (details: {currency: string; price: number}) => {
            this.model.notify('currency-price-edited', details);
        });

        this.model.subscribe('model-changed', (modelItems: ModelItem[]) => {
            this.view.notify('model-changed', modelItems);
        });
    }

    setView(view: View) {
        this.view = view;
    }

    setModel(model: CurrencyModel) {
        this.model = model;
    }

    async initialize() {
        const response = await fetch(`http://127.0.0.1:3000/rates/${REQUESTED_CURRENCY.name}`);
        const rates = await response.json();

        this.model.setItems(rates as unknown as CurrencyRate[]);
    }

    hide() {
        this.view.hide();
    }
}
