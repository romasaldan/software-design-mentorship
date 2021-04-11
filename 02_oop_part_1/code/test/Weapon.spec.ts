import {Weapon} from '../src/Weapon';

class WeaponTest extends Weapon {
  polish() {}

  public setTestDamageModifier(damageModifier: number): void {
    this.setDamageModifier(damageModifier);
  }

  public setTestDurabilityModifier(durabilityModifier: number): void {
    this.setDurabilityModifier(durabilityModifier);
  }
}

afterAll(() => WeaponTest.reset());

describe('Weapon', () => {
  it('getDamage returns effective damage', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.7893, 300, 2.032);

    expect(weapon.getDamage()).toBe(30.4219);
  });

  it('getDurability returns effective durability', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.7893, 300, 2.032);

    expect(weapon.getDurability()).toBe(0.7893);
  });

  it('to string implementation', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.7893, 300, 2.032);

    weapon.setTestDamageModifier(0.05);
    weapon.setTestDurabilityModifier(0.05);

    expect(String(weapon)).toBe(
      'hammer - Value: 300, Weight: 2.03, Damage: 30.47, Durability: 83.93%'
    );
  });

  it('use should return action description', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.7893, 300, 2.032);
    weapon.setTestDamageModifier(0.05);
    weapon.setTestDurabilityModifier(0.05);

    expect(weapon.use()).toBe(
      'You use the hammer, dealing 30.47 points of damage.'
    );
  });

  it('use should decrease effective durability', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.7893, 300, 2.032);
    weapon.use();

    expect(weapon.getDurability()).toBe(0.7393);
  });

  it('use should return that weapon is broken after using', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.1293, 300, 2.032);
    weapon.use();
    weapon.use();

    expect(weapon.use()).toBe(
      'You use the hammer, dealing 30.42 points of damage. The hammer breaks.'
    );
  });

  it('use should not use weapon when it is broken', () => {
    const weapon = new WeaponTest('hammer', 30.4219, 0.1293, 300, 2.032);
    weapon.use();
    weapon.use();
    weapon.use();

    expect(weapon.use()).toBe("You can't use the hammer, it is broken.");
  });
});
