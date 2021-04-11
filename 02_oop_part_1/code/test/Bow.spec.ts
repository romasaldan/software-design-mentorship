import { Bow } from "../src/Bow";

afterAll(() => Bow.reset())

describe('Bow', () => {
  it('polish should increase modifier durability', () => {
    const bow = new Bow(30.4219, 0.7893, 300, 2.032);
    bow.polish()

    expect(bow.getDurability()).toBe(0.8393)
  })

  it('durability can not be more than 1', () => {
    const bow = new Bow(30.4219, 0.9293, 300, 2.032);
    bow.polish()
    bow.polish()

    expect(bow.getDurability()).toBe(1)
  })
})
