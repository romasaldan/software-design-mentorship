import {Item} from './Item';

export abstract class Weapon extends Item {
  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;
  private MODIFIER_CHANGE_RATE: number;

  constructor() {
    super();
  }

  public getDamage() {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability() {
    return (this.baseDurability + this.durabilityModifier) * 100;
  }

  toString() {
    return `${super.toString()}, Damage: ${this.formatNumber(
      this.getDamage()
    )}, Durability: ${this.formatNumber(this.getDurability())}%`;
  }

  public use() {
    return `You use the ${this.getName} , dealing ${this.formatNumber(
      this.getDamage()
    )} points of damage.`;
  }
}
