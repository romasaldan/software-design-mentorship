import {WeightedGraphItem} from '../graph-lib/CitiesGraph';

export const extractNames = (items: WeightedGraphItem[]) =>
    [...new Set([...items.map((item) => item.to), ...items.map((item) => item.from)])].sort();
