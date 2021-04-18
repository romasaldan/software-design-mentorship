import { State } from '../src/client';
import { Shipment } from '../src/shipment';

describe('Shipment', () => {
  it('ship method should return string with id addresses and cost', () => {
    const state: State = {
      shipmentId: 1,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 10
    }
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 1, from: Hnizdychiv, to: Lviv, cost: 3.9$')
  });

});
