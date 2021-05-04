import { EOL } from 'os';
import { State } from '../src/client';
import { Shipment } from '../src/shipment';

describe('Shipment', () => {
  it('ship method should return string with id addresses and cost (air east letter)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '21740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 1, from: Hnizdychiv, to: Lviv, cost: 3.9$');
  });

  it('ship method should return string with id addresses and cost (chigago parcel letter)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '51740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 2, from: Hnizdychiv, to: Lviv, cost: 4.2$');
  });

  it('ship method should return string with id addresses and cost (pacific parcel letter)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 10,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 3, from: Hnizdychiv, to: Lviv, cost: 5.1$');
  });

  it('ship method should return string with id addresses and cost (air east package)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '21740',
      weight: 100,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 4, from: Hnizdychiv, to: Lviv, cost: 25$');
  });

  it('ship method should return string with id addresses and cost (chigago parcel package)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '51740',
      weight: 100,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 5, from: Hnizdychiv, to: Lviv, cost: 20$');
  });

  it('ship method should return string with id addresses and cost (pacific parcel package)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 100,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 6, from: Hnizdychiv, to: Lviv, cost: 19$');
  });

  it('ship method should return string with id addresses and cost (air east oversized)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '21740',
      weight: 200,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 7, from: Hnizdychiv, to: Lviv, cost: 60$');
  });

  it('ship method should return string with id addresses and cost (chigago parcel oversized)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '51740',
      weight: 200,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 8, from: Hnizdychiv, to: Lviv, cost: 40$');
  });

  it('ship method should return string with id addresses and cost (pacific parcel oversized)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 200,
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe('Shipment id: 9, from: Hnizdychiv, to: Lviv, cost: 42$');
  });

  it('ship method should return string with id addresses and cost (pacific parcel oversized)', () => {
    const state: State = {
      shipmentId: 0,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '81740',
      weight: 200,
      marks: ['Fragile', 'Do Not Leave', 'Return Receipt Requested'],
    };
    const shipment = new Shipment(state);

    expect(shipment.ship()).toBe(
      `Shipment id: 10, from: Hnizdychiv, to: Lviv, cost: 42$${EOL}**MARK FRAGILE**${EOL}**MARK DO NOT LEAVE**${EOL}**MARK RETURN RECEIPT REQUESTED**`
    );
  });
});
