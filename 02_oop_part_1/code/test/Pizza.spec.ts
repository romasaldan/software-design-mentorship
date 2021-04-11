import {Pizza} from '../src/Pizza';

afterAll(() => Pizza.reset());

describe('Pizza', () => {
  // const bow = new Bow(30.4219, 0.7893, 300, 2.032);
  // const sword = new Sword(30.4219, 0.7893, 300, 2.032);
  it('should be returned a message about result of eating', () => {
    const pizza = new Pizza(3, false);

    expect(pizza.use()).toBe('You eat a slice of the pizza.');
  });

  it('should be returned a message when pizza is consumed', () => {
    const pizza = new Pizza(2, false);
    pizza.use();
    pizza.use();

    expect(pizza.use()).toBe(`There is nothing left of the pizza to consume.`);
  });
});
