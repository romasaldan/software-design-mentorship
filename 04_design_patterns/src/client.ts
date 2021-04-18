import { Console } from "node:console";
import { MockGUI } from "./mocks/mockGUI";
import { Shipment } from "./shipment";

export interface State {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[]
}

export class Client {
  gui: MockGUI;

  constructor(gui: MockGUI) {
    this.gui = new MockGUI()
    this.gui.on('click', this.onShip.bind(this))
  }

  onShip(shipment: Shipment) {
    console.log(1)
  }
}