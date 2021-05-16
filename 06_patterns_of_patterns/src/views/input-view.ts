import {REQUESTED_CURRENCY} from '../mocks/requested-currency';
import {ModelItem} from '../types/model';
import {View} from './view';

export class InputView extends View {
    protected get amountInputs() {
        return Array.from(document.getElementsByClassName('currency-amount'));
    }

    protected get priceInputs() {
        return Array.from(document.getElementsByClassName('currency-price'));
    }

    protected getTemplate(modelItems: ModelItem[]): string {
        return modelItems
            .map(
                (el) => `
                    <fieldset style="width: 450px">
                        <legend>${el.fullName}</legend>
                        <div>1 ${REQUESTED_CURRENCY.name} is ${el.rate} ${el.name}</div>
                        <div style="display: flex">
                            <div style="display: flex; flex-direction: column;">
                            <span>${REQUESTED_CURRENCY.name}</span>
                            <input class="currency-amount" value=${el.amount} data-currency="${el.name}" > 
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <span>${el.name}</span>
                                <input value=${el.price} class="currency-price" data-currency="${el.name}">
                            </div>
                        </div>
                    </fieldset>`
            )
            .join('');
    }
}
