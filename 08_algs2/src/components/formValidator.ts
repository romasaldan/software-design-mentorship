import {WeightedGraphItem} from '../graph-lib/CitiesGraph';

export class WeightedGraphValidator {
    private isNotTheSame(item: WeightedGraphItem) {
        return item.from !== item.to;
    }

    private isElementAlreadyExists(item: WeightedGraphItem, state: WeightedGraphItem[]) {
        return state.some(
            (stateItem) =>
                (stateItem.to === item.to && stateItem.from === item.from) ||
                (stateItem.to === item.from && stateItem.from === item.to)
        );
    }

    isValid(item: WeightedGraphItem, state: WeightedGraphItem[]) {
        return item.weight > 0 && !this.isElementAlreadyExists(item, state) && this.isNotTheSame(item);
    }
}
