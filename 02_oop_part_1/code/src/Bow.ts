import {Weapon} from './Weapon';

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    if (this.getDurability() + this.MODIFIER_CHANGE_RATE < 1) {
      this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
    } else {
      this.durabilityModifier = 1 - this.baseDurability;
    }
  }
}
