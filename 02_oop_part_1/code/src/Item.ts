import {Comparable} from './Comparable';

let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
  private readonly PRECISION = 2;
  private id: number;
  private value: number;
  private weight: number;
  private name: string;

  constructor(name: string, value: number, weight: number) {
    this.id = numberOfItems;
    numberOfItems++;

    this.name = name;
    this.value = value;
    this.weight = weight;
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

  public setValue(price: number): void {
    this.value = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public static reset(): void {
    numberOfItems = 0;
  }
}
