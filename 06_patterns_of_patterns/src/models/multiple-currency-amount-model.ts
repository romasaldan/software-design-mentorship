import {CurrencyModel, ModelItem} from './currency-model';

export class MultipleCurrencyAmountModel extends CurrencyModel {
    updateModelByAmount(_currency: string, amount: number) {
        this.model.forEach((modelItem: ModelItem) => {
            modelItem.amount = amount;
            modelItem.price = this.safeFloatService.round(this.safeFloatService.divide(amount, modelItem.rate), 2);
        });

        this.notify('model-changed');
    }

    updateModelByPrice(_currency: string, price: number) {
        this.model.forEach((modelItem: ModelItem) => {
            modelItem.amount = this.safeFloatService.round(this.safeFloatService.multiply(price, modelItem.rate), 2);
            modelItem.price = price;
        });

        this.notify('model-changed');
    }
}
