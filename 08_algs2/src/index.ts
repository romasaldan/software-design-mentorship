import {ElementsList} from './components/ElementsList';
import {Form} from './components/Form';
import {WeightedGraphItem} from './graph-lib/CitiesGraph';
import './index.css';
import {Results} from './components/Results';
import {WeightedGraphValidator} from './components/formValidator';

const form = new Form();
const state: WeightedGraphItem[] = [];
const validator = new WeightedGraphValidator();

form.init();
form.subscribe('added', (route: WeightedGraphItem) => {
    if (validator.isValid(route, state)) {
        state.push(route);
    } else {
        alert('value not valid');
    }

    const list = new ElementsList(state);
    document.getElementById('root')?.append(list.getElement());

    list.subscribe('submitted', (city: string) => {
        const results = new Results(city, state);

        document.getElementById('root')?.append(results.getElement());
    });
});
