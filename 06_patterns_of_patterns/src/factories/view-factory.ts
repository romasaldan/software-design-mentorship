import {CurrencyModel} from '../models/currency-model';
import {InputView} from '../views/input-view';
import {RangeView} from '../views/range-view';
import {ViewType} from '../types/views';

export class ViewFactory {
    public static createView(query: ViewType, model: CurrencyModel) {
        switch (query) {
            case 'range':
                return new RangeView(model);
            case 'input':
                return new InputView(model);

            default:
                throw Error('view has not implemented yet');
        }
    }
}
