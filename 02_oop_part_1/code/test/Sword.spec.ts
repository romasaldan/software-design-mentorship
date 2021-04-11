import { Sword } from "../src/Sword"

afterAll(() => Sword.reset())

describe('Sword', () => {
  it('polish should increase damage modifier', () => {
    const sword = new Sword(30.4219, 0.7893, 300, 2.032);
    sword.polish()

    expect(sword.getDamage()).toBe(35.4219)
  })

  it('damage can not be more than 125% of base damage', () => {
    const sword = new Sword(60, 0.7893, 300, 2.032);
    sword.polish()
    sword.polish()
    sword.polish()
    expect(sword.getDamage()).toBe(75)
  })
})
