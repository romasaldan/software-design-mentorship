import { addMarks } from './add-marks';
import { Marks, State } from './client';
import { AirEastShipper } from './factory/air-east-shipper/air-east-shipper';
import { ChigagoSprintShipper } from './factory/chigaco-sprint-shipper/chigaco-sprint-shipper';
import { Product } from './factory/interfaces/product';
import { ShipperFactory } from './factory/interfaces/shipper-factory';
import { PacificParcelShipper } from './factory/pacific-parcel-shipper/pacific-parcel';

export class Shipment {
  private static shipmentAmount = 0;
  private state: State;
  private factory!: ShipperFactory;

  constructor(state: State) {
    this.state = state;

    this.setFactory(state.fromZipCode);
  }

  private setFactory(fromZipCode: string): void {
    if ((/^[7-9]/).test(fromZipCode)) {
      this.factory = new PacificParcelShipper();
    } else if ((/^[4-6]/).test(fromZipCode)) {
      this.factory = new ChigagoSprintShipper();
    } else {
      this.factory = new AirEastShipper();
    }
  }

  private getProduct(): Product {
    if (this.state.weight < 15) {
      return this.factory.createLetter()
    } else if (this.state.weight < 160) {
      return this.factory.createPackage()
    } else {
      return this.factory.createOversized()
    }
  }

  public getShipmentID(): string {
    Shipment.shipmentAmount++;
    return String(this.state.shipmentId || Shipment.shipmentAmount);
  }

  private getTotalCost(): number {
    return this.getProduct().getCost(this.state.weight)
  }

  public getState(): State {
    return this.state;
  }

  public setToAddress(address: string): void {
    this.state.toAddress = address;
  }

  public setFromAddress(address: string): void {
    this.state.fromAddress = address;
  }

  public setToZipCode(zipCode: string): void {
    this.state.toZipCode = zipCode;
  }

  public setFromZipCode(zipCode: string): void {
    this.state.fromZipCode = zipCode;
    this.setFactory(zipCode);
  }

  public setMarks(marks: Marks[]): void {
    this.state.marks = marks;
  }

  @addMarks
  public ship(): string {
    return `Shipment id: ${this.getShipmentID()}, from: ${this.state.fromAddress}, to: ${this.state.toAddress
      }, cost: ${this.getTotalCost()}$`;
  }
}
