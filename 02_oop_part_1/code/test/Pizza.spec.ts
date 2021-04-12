import {Pizza} from '../src/Pizza';

afterAll(() => Pizza.reset());

describe('Pizza', () => {
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
