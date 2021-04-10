import {Consumable} from './Consumable';

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', numberOfSlices, 100, spoiled);

    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  public eat() {
    if (this.numberOfSlices > this.slicesEaten) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return 'You eat a slice of the pizza';
    }

    return '';
  }
}
