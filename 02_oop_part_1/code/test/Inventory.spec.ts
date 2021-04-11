import { Inventory } from "../src/Inventory";
import { Bow } from "../src/Bow";
import { Sword } from "../src/Sword"
import { Consumable } from "../src/Consumable";
import { ItemWeightComparator } from "../src/ItemWeightComparator";

describe('Inventory', () => {
  const bow = new Bow(30.4219, 0.7893, 300, 100);
  const sword = new Sword(30.4219, 0.7893, 400, 200);
  const consumable = new Consumable('consumable', 200, 150,false);

  it('should be returned a message with string repesenatation' , () => {
    const inventory = new Inventory()
    inventory.addItem(bow);
    inventory.addItem(sword)

    expect(String(inventory)).toBe(bow + ', ' + sword)
  })

  it('should sort items by value' , () => {
    const inventory = new Inventory()
    inventory.addItem(bow);
    inventory.addItem(sword);
    inventory.addItem(consumable)
    inventory.sort()

    const expectedInventory = new Inventory();
    expectedInventory.addItem(consumable);
    expectedInventory.addItem(bow);
    expectedInventory.addItem(sword);

    expect(String(inventory)).toEqual(String(expectedInventory))
  })

  it('should sort by comparator' , () => {
    const inventory = new Inventory()
    inventory.addItem(bow);
    inventory.addItem(sword);
    inventory.addItem(consumable)
    inventory.sort(new ItemWeightComparator())
    
    const expectedInventory = new Inventory();
    expectedInventory.addItem(bow);
    expectedInventory.addItem(consumable);
    expectedInventory.addItem(sword);

    expect(String(inventory)).toEqual(String(expectedInventory))
  })
})
