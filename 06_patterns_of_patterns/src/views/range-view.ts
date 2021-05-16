import {REQUESTED_CURRENCY} from '../mocks/requested-currency';
import {ModelItem} from '../types/model';
import {SafeFloatService} from '../utils/safe-float-service';
import {View} from './view';

export class RangeView extends View {
    private safeFloatService = new SafeFloatService();
    protected get amountInputs() {
        return Array.from(document.getElementsByClassName('currency-amount'));
    }

    protected get priceInputs() {
        return Array.from(document.getElementsByClassName('currency-price'));
    }

    private getPriceInputMinValue(rate: number): number {
        return this.safeFloatService.round(this.safeFloatService.divide(1, rate), 2);
    }

    private getPriceInputMaxValue(rate: number): number {
        return this.safeFloatService.round(this.safeFloatService.divide(1000, rate), 2);
    }

    private getPriceInputStep(rate: number, amount: number): number {
        return this.safeFloatService.round(this.safeFloatService.divide(1000, rate), 2);
    }

    protected getTemplate(modelItems: ModelItem[]): string {
        return modelItems
            .map(
                (el) => `
            <fieldset>
                <legend>${el.fullName}</legend>
                <div>1 ${REQUESTED_CURRENCY.name} is ${el.rate} ${el.name}</div>
                <div style="display: flex">
                    <div style="display: flex; flex-direction: column;">
                    <span>${REQUESTED_CURRENCY.name} ${el.amount}</span>
                    <input type="range" value=${
                        el.amount
                    } min="1" max="1000" step="1" class="currency-amount" data-currency="${el.name}"> 
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span>${el.name} ${el.price}</span>
                        <input type="range" class="currency-price" min="${this.getPriceInputMinValue(
                            el.rate
                        )}" max="${this.getPriceInputMaxValue(el.rate)}" step="${this.getPriceInputStep(
                    el.rate,
                    el.amount
                )}
                }" value="${el.price}" data-currency="${el.name}">
                    </div>
                </div>
            </fieldset>
        `
            )
            .join('');
    }
}
