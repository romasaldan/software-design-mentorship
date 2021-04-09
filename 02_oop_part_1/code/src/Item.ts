import {Comparable} from './Comparable';

export abstract class Item implements Comparable<Item> {
  private static instancesAmount = 0;
  private readonly PRECISION = 2;
  private id: number;
  private value: number;
  private weight: number;
  private name: string;

  constructor() {
    this.id = Item.instancesAmount;
    Item.instancesAmount++;
  }

  public compareTo(other: Item): number {
    if (this.value === other.getValue()) {
      return this.name
        .toLowerCase()
        .localeCompare(other.getName().toLowerCase());
    }

    return Math.sign(this.value - other.getValue());
  }

  protected formatNumber(number: number): string {
    return String(Math.round(number * this.PRECISION) / this.PRECISION);
  }

  toString() {
    return `${this.name} - Value: ${this.formatNumber(
      this.value
    )}, Weight: ${this.formatNumber(this.weight)}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getName(): string {
    return this.name;
  }

  public setValue(price: number) {
    this.value = price;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }

  public reset() {}
}
