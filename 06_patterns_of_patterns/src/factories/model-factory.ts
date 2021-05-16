import {MultipleCurrencyAmountModel} from '../models/multiple-currency-amount-model';
import {SingleCurrencyAmountModel} from '../models/single-currency-amount-model';
import {ModelType} from '../types/model';

export class ModelFactory {
    public static createModel(query: ModelType) {
        switch (query) {
            case 'single':
                return new SingleCurrencyAmountModel();
            case 'multiple':
                return new MultipleCurrencyAmountModel();

            default:
                throw Error('model has not implemented yet');
        }
    }
}
