import {Controller} from './controllers/controller';
import {Form} from './components/form';
import {ViewType} from './types/views';
import {View} from './views/view';
import {ViewFactory} from './factories/view-factory';
import {ModelFactory} from './factories/model-factory';
import {ModelType} from './types/model';
import {CurrencyModel} from './models/currency-model';
import {Back} from './components/back';

const form = new Form();
const backButton = new Back();

form.subscribe('selected', (details: {model: ModelType; view: ViewType}) => {
    form.hide();
    const model: CurrencyModel = ModelFactory.createModel(details.model);
    const view: View = ViewFactory.createView(details.view, model);
    const controller = new Controller(view, model);

    backButton.subscribe('back-clicked', () => {
        controller.hide();
        form.show();
        backButton.hide();
    });

    controller.initialize();
    backButton.show();
});

form.show();
