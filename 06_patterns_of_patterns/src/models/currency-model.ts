import {PubSub} from '../utils/pub-sub';
import {SafeFloatService} from '../utils/safe-float-service';

export interface CurrencyRate {
    name: string;
    rate: number;
    fullName: string;
}

export interface ModelItem extends CurrencyRate {
    amount: number;
    price: number;
}

export abstract class CurrencyModel extends PubSub {
    protected model!: ModelItem[];
    protected safeFloatService = new SafeFloatService();

    constructor(protected items: CurrencyRate[] = []) {
        super();

        this.setInitialModel();
        this.subscribe('currency-amount-edited', (details: {currency: string; amount: number}) =>
            this.updateModelByAmount(details.currency, details.amount)
        );

        this.subscribe('currency-price-edited', (details: {currency: string; price: number}) => {
            this.updateModelByPrice(details.currency, details.price);
        });
    }

    private setInitialModel() {
        this.model = this.items.map((exchangeRate) => ({
            amount: 1,
            price: this.safeFloatService.round(this.safeFloatService.divide(1, exchangeRate.rate), 2),
            ...exchangeRate,
        }));
    }

    setItems(items: CurrencyRate[]) {
        this.items = items;

        this.setInitialModel();

        this.notify('model-changed');
    }

    getModel() {
        return this.model;
    }

    abstract updateModelByAmount(currency: string, amount: number): void;
    abstract updateModelByPrice(currency: string, amount: number): void;
}
