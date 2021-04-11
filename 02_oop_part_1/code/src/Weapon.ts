import {Item} from './Item';

export abstract class Weapon extends Item {
  protected baseDamage: number;
  protected damageModifier = 0;
  protected baseDurability: number;
  protected durabilityModifier = 0;
  protected MODIFIER_CHANGE_RATE = 0.05;
  private lostDurability = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  toString() {
    return `${super.toString()}, Damage: ${this.formatNumber(
      this.getDamage()
    )}, Durability: ${this.formatNumber(this.getDurability() * 100)}%`;
  }

  public use(): string {
    if (this.getCurrentDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    } else {
      this.changeLostDurability();

      if (this.getCurrentDurability() > 0) {
        return this.getDamageMessage();
      } else {
        return `${this.getDamageMessage()} The ${this.getName()} breaks.`;
      }
    }
  }

  private getDamageMessage(): string {
    return `You use the ${this.getName()}, dealing ${this.formatNumber(
      this.getDamage()
    )} points of damage.`;
  }

  private getCurrentDurability(): number {
    return this.getDurability() - this.lostDurability;
  }

  private changeLostDurability(): void {
    this.lostDurability += this.MODIFIER_CHANGE_RATE;
  }
}
