import {CITIES} from '../constants/cities';
import {PubSub} from '../utils/PubSub';

const initialState = {
    from: CITIES[0],
    to: CITIES[1],
    weight: 0,
};

export class Form extends PubSub {
    internalState = {
        ...initialState,
    };

    private get rootElement() {
        return document.getElementById('root');
    }

    private get fromElement() {
        return document.getElementById('from');
    }

    private get toElement() {
        return document.getElementById('to');
    }

    private get weightElement() {
        return document.getElementById('weight');
    }

    private get addButton() {
        return document.getElementById('addButton');
    }

    private getTemplate() {
        return `
          <div style="margin-left: 20px; width: 500px">
            <div>
              <label>Вибрати перше місто пари</label>
              <select id="from">
              ${CITIES.map((city) => `<option>${city}</option>`)}
              </select>
            </div>
            <div>
              <label>Вибрати друге місто пари</label>
              <select id="to">
              ${CITIES.map((city, i) => `<option  ${i === 1 ? 'selected' : ''}>${city}</option>`)}
              </select>
            </div>
            <div>
              <label>Ввести ціну</label>
              <input type="number" id="weight" value="${this.internalState.weight}">
            </div>

            <button id="addButton">Додати новий маршрут</button>
          </div>`;
    }

    private subscribeToInternalEvents() {
        this.fromElement?.addEventListener('change', this.onChanged);
        this.toElement?.addEventListener('change', this.onChanged);
        this.weightElement?.addEventListener('change', this.onChanged);
        this.addButton?.addEventListener('click', this.onAddButtonClick);
    }

    private unSubscribeFromInternalEvents() {
        this.fromElement?.addEventListener('change', this.onChanged);
        this.toElement?.addEventListener('change', this.onChanged);
        this.weightElement?.addEventListener('change', this.onChanged);
        this.addButton?.addEventListener('click', this.onAddButtonClick);
    }

    private onChanged = (e: Event) => {
        type Key = 'from' | 'to' | 'weight';
        const idElem = (e.target as HTMLInputElement).id as Key;
        const value = (e.target as HTMLInputElement).value;
        const formValue = idElem === 'weight' ? Number(value) : value;

        this.internalState = {
            ...this.internalState,
            [idElem]: formValue,
        };
    };

    private onAddButtonClick = () => {
        this.unSubscribeFromInternalEvents();
        const payload = {...this.internalState};
        this.internalState = {...initialState};
        this.init();
        this.notify('added', payload);
    };

    init() {
        if (this.rootElement) {
            this.rootElement.innerHTML = this.getTemplate();
            this.subscribeToInternalEvents();
        }
    }
}
