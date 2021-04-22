import { MockGUI } from '../test/mocks/mockGUI';
import { Shipment } from './shipment';

type Marks = "Fragile" | "Do Not Leave" | "Return Receipt Requested"

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
  private gui: MockGUI;

  constructor(gui: MockGUI) {
    this.gui = gui;
    this.gui.on('ship', (shipment: Shipment) => this.onShip(shipment));
  }

  onShip(shipment: Shipment) {
    console.log(shipment);
  }
}
