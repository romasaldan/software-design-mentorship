import { State, Client } from '../src/client';
import { MockGUI } from '../src/mocks/mockGUI';
import { Shipment } from '../src/shipment';

describe('Client', () => {
  it('ship method should return string with id addresses and cost', () => {
    const state: State = {
      shipmentId: 1,
      toAddress: 'Lviv',
      fromAddress: 'Hnizdychiv',
      toZipCode: '12345',
      fromZipCode: '11740',
      weight: 10,
    };
    const gui = new MockGUI();
    const client = new Client(new MockGUI());
    const spyShipment = jest.spyOn(client, 'onShip');

    gui.trigger('ship', new Shipment(state));
    expect(spyShipment).toHaveBeenCalled();
    spyShipment.mockClear();
  });
});
