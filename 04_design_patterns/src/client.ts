import { MockGUI } from '../test/mocks/mockGUI';
import { Shipment } from './shipment';

export type Marks = 'Fragile' | 'Do Not Leave' | 'Return Receipt Requested';

export interface State {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: Marks[];
}

export class Client {
  private static instance: Client;
  private gui: MockGUI;

  private constructor(gui: MockGUI) {
    this.gui = gui;
    this.gui.on('ship', (shipment: Shipment) => this.onShip(shipment));
  }

  public static getInstance(gui: MockGUI): Client {
    if (Client.instance === undefined) {
      Client.instance = new Client(gui);
    }

    return Client.instance;
  }

  public setGui(gui: MockGUI) {
    this.gui = gui;
  }

  public onShip(shipment: Shipment): void {
    console.log(shipment.ship());
  }
}
