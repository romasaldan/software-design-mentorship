import { State } from '../src/client';
import { Shipment } from '../src/shipment';

describe('Shipment', () => {
  it('ship method should return string with id addresses and cost (air east)', () => {
    const state: State = {
      shipmentId: 1,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '21740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 1, from: Hnizdychiv, to: Lviv, cost: 3.9$');
  });

  it('ship method should return string with id addresses and cost (chigago parcel)', () => {
    const state: State = {
      shipmentId: 1,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '51740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 2, from: Hnizdychiv, to: Lviv, cost: 4.2$');
  });

  it('ship method should return string with id addresses and cost (pacific parcel)', () => {
    const state: State = {
      shipmentId: 1,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 3, from: Hnizdychiv, to: Lviv, cost: 5.1$');
  });
});
