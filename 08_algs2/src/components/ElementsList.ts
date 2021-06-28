import {WeightedGraphItem} from '../graph-lib/CitiesGraph';
import {PubSub} from '../utils/PubSub';

export const extractNames = (items: WeightedGraphItem[]) =>
    [...new Set([...items.map((item) => item.to), ...items.map((item) => item.from)])].sort();

const getTableRow = (item: WeightedGraphItem) => `
    <tr>
        <td>${item.from}</td>
        <td>${item.to}</td>
        <td>${item.weight}</td>
    </tr>
`;

const getComboboxRow = (items: string[]) => `
    <div style="width: 500px">
        <label>Обчислии найкоротші відстані до міста</label>
        <select id="toCity">
            ${items.map((city) => `<option>${city}</option>`)}
        </select>
    </div>
`;

export class ElementsList extends PubSub {
    private chosenCity: string;

    constructor(private list: WeightedGraphItem[]) {
        super();

        this.chosenCity = extractNames(list)[0];
    }

    private get submitButton() {
        return document.getElementById('calculate');
    }

    private get toCityElement() {
        return document.getElementById('toCity');
    }

    private getTemplate() {
        return `
            <div style="margin-left: 20px">
                <table>
                    <tr>
                      <th>Звідки</th>
                      <th>До</th>
                      <th>Вартість</th>
                    </tr>
                    ${this.list.map(getTableRow).join('')}
                </table>

                ${getComboboxRow(extractNames(this.list))}
                <button id="calculate">Обчислити</button>
            </div>  
        `;
    }

    private subscribeToInternalEvents() {
        this.toCityElement?.addEventListener('click', this.onChanged);
        this.submitButton?.addEventListener('click', this.onSubmitted);
    }

    private unSubscribeFromInternalEvents() {
        this.toCityElement?.removeEventListener('click', this.onChanged);
        this.submitButton?.removeEventListener('click', this.onSubmitted);
    }

    private onChanged = (e: Event) => {
        this.chosenCity = (e.target as HTMLInputElement).value;
    };

    private onSubmitted = () => {
        this.notify('submitted', this.chosenCity);
    };

    getElement() {
        this.unSubscribeFromInternalEvents();
        const rootElement = document.createElement('div');

        rootElement.innerHTML = this.getTemplate();
        setTimeout(() => this.subscribeToInternalEvents(), 0);

        return rootElement;
    }
}
