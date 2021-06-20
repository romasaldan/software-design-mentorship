import {ModelItem} from '../types/model';
import {CurrencyModel} from './currency-model';

export class SingleCurrencyAmountModel extends CurrencyModel {
    updateModelByAmount(currency: string, amount: number) {
        const model = this.model.find((model: ModelItem) => model.name === currency);

        if (model) {
            model.amount = amount;
            model.price = this.safeFloatService.round(this.safeFloatService.divide(amount, model.rate), 2);
        }

        this.notify('model-changed', this.model);
    }

    updateModelByPrice(currency: string, price: number) {
        const model = this.model.find((model: ModelItem) => model.name === currency);

        if (model) {
            model.amount = this.safeFloatService.round(this.safeFloatService.multiply(price, model.rate), 2);
            model.price = price;
        }

        this.notify('model-changed', this.model);
    }
}
