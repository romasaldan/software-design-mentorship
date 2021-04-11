import { Consumable } from "../src/Consumable";
// import { Bow } from "../src/Bow";
// import { Sword } from "../src/Sword"

afterAll(() => Consumable.reset())

describe('Consumable', () => {
  // const bow = new Bow(30.4219, 0.7893, 300, 2.032);
  // const sword = new Sword(30.4219, 0.7893, 300, 2.032);
  it('should be returned a message about result of eating' , () => {
    const comsumable = new Consumable('bread', 100, 150, false)

    expect(comsumable.eat()).toBe("You eat the bread.")
  })

  it('should be returned a message with sick if the poduct is spoiled' , () => {
    const comsumable = new Consumable('bread', 100, 150, true)

    expect(comsumable.eat()).toBe(`You eat the bread.
You fell sick.`)
  })
})
