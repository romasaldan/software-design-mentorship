import {Item} from './Item';
import {ItemWeightComparator} from './ItemWeightComparator';

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(
    comparator: ItemWeightComparator = {
      compare: (first, second) => first.compareTo(second),
    }
  ): void {
    this.items.sort(comparator.compare);
  }

  toString() {
    return this.items.join(', ');
  }
}
