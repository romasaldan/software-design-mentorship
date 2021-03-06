import {Item} from './Item';

export class Consumable extends Item {
  private spoiled = false;
  private consumed = false;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
  }

  public eat(): string {
    if (this.spoiled) {
      return `${this.getEatenMessage()}
You fell sick.`;
    } else {
      return this.getEatenMessage();
    }
  }

  private getEatenMessage(): string {
    return `You eat the ${this.getName()}.`;
  }

  public use(): string {
    if (this.consumed) {
      return `There is nothing left of the ${this.getName()} to consume.`;
    } else {
      return this.eat();
    }
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  toString() {
    const spoiledStatus = this.spoiled ? 'spoiled' : 'not spoiled';
    const consumedStatus = this.consumed ? 'consumed' : 'not consumed';

    return `${super.toString()} The ${this.getName()} is ${spoiledStatus} and ${consumedStatus}`;
  }
}
