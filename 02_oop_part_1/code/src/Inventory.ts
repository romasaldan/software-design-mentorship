import {Item} from './Item';
import {ItemWeightComparator} from './ItemWeightComparator';

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(comparator?: ItemWeightComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((first, second) => first.compareTo(second));
    }
  }

  toString() {
    return this.items.join(', ');
  }
}
