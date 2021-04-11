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
    return this.baseDurability + this.durabilityModifier - this.lostDurability;
  }

  protected setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier
  }

  protected setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier
  }

  protected getDurabilityModifier(): number {
    return this.durabilityModifier
  }

  protected getDamageModifier(): number {
    return this.damageModifier 
  }

  toString() {
    return `${super.toString()}, Damage: ${this.formatNumber(
      this.getDamage()
    )}, Durability: ${this.formatNumber(this.getDurability() * 100)}%`;
  }

  public use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    } else {
      return this.applyWeapon()
    }
  }

  private applyWeapon() {
    this.changeLostDurability();

    if (this.getDurability() > 0) {
      return this.getDamageMessage();
    } else {
      return `${this.getDamageMessage()} The ${this.getName()} breaks.`;
    }
  }

  private getDamageMessage(): string {
    return `You use the ${this.getName()}, dealing ${this.formatNumber(
      this.getDamage()
    )} points of damage.`;
  }

  private changeLostDurability(): void {
    this.lostDurability += this.MODIFIER_CHANGE_RATE;
  }

  public abstract polish():void
}
