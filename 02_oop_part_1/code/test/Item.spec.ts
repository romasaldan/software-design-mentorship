import {Item} from '../src/Item';

class ItemTest extends Item {
  use() {
    return '';
  }
}

afterAll(() => ItemTest.reset());

describe('Item', () => {
  const item1 = new ItemTest('item 1', 5, 100);
  const item2 = new ItemTest('item 2', 15, 200);
  const item3 = new ItemTest('item 3', 50, 50);
  const items = [item1, item2, item3];

  it('id should be incremented for each next item', () => {
    expect(items.map((item) => item.getId())).toEqual([0, 1, 2]);
  });

  it("compare method should return 1 in case if item's value is bigger", () => {
    expect(item2.compareTo(item1)).toBe(1);
  });

  it("should return 1 if values are equal and item's name is firstly by alphabetical order", () => {
    const item4 = new ItemTest('aitem 4', 5, 15);

    expect(item1.compareTo(item4)).toBe(1);
  });

  it('to string method implementation', () => {
    expect(String(new ItemTest('ring', 3000, 0.013))).toBe(
      'ring - Value: 3000, Weight: 0.01'
    );
  });
});
