import {Consumable} from '../src/Consumable';

afterAll(() => Consumable.reset());

describe('Consumable', () => {
  it('should be returned a message about result of eating', () => {
    const comsumable = new Consumable('bread', 100, 150, false);

    expect(comsumable.eat()).toBe('You eat the bread.');
  });

  it('should be returned a message with sick if the poduct is spoiled', () => {
    const comsumable = new Consumable('bread', 100, 150, true);

    expect(comsumable.eat()).toBe(`You eat the bread.
You fell sick.`);
  });
});
