import {ItemWeightComparator} from '../src/ItemWeightComparator';
import {Item} from '../src/Item';

const weightComparator = new ItemWeightComparator();

class ItemTest extends Item {}

afterAll(() => ItemTest.reset());

describe('ItemWeightComparator', () => {
  const item1 = new ItemTest('item 1', 5, 100);
  const item2 = new ItemTest('item 2', 15, 200);
  const item3 = new ItemTest('item 3', 50, 100);

  it("it should return 1 if first item's weight is bigger than second", () => {
    expect(weightComparator.compare(item2, item1)).toEqual(1);
  });

  it("it should return 1 when weights are equal but first item's value is bigger", () => {
    expect(weightComparator.compare(item3, item1)).toEqual(1);
  });
});
