import { addMarks } from './add-marks';
import { Marks, State } from './client';
import { Shipper } from './shipper';
import { AirEastShipper } from './shipper-strategies/air-east-shipper';
import { ChigagoSprintShipper } from './shipper-strategies/chigago-sprint-shipper';
import { PacificParcelShipper } from './shipper-strategies/pacific-parcel-shipper';
import { Letter } from './shipper-visitors/letter';
import { Oversized } from './shipper-visitors/oversized';
import { Package } from './shipper-visitors/package';
import { Visitor } from './shipper-visitors/visitor';

export class Shipment {
  private static shipmentAmount = 0;
  private state: State;
  private shipper!: Shipper;
  private visitor!: Visitor;

  constructor(state: State) {
    this.state = state;

    this.setStrategy(state.fromZipCode);
    this.initializeVisitor(state.weight);
  }

  private setStrategy(fromZipCode: string): void {
    if (['7', '8', '9'].includes(fromZipCode[0])) {
      this.shipper = new Shipper(new PacificParcelShipper());
    } else if (['4', '5', '6'].includes(fromZipCode[0])) {
      this.shipper = new Shipper(new ChigagoSprintShipper());
    } else {
      this.shipper = new Shipper(new AirEastShipper());
    }
  }

  private initializeVisitor(weight: number): void {
    if (weight < 15) {
      this.visitor = new Letter(weight);
    } else if (weight < 160) {
      this.visitor = new Package(weight);
    } else {
      this.visitor = new Oversized(weight);
    }
  }

  public getShipmentID(): string {
    Shipment.shipmentAmount++;
    return String(this.state.shipmentId || Shipment.shipmentAmount);
  }

  private getTotalCost(): number {
    return this.shipper.getCost(this.visitor);
  }

  getState(): State {
    return this.state;
  }

  public setToAddres(address: string): void {
    this.state.toAddress = address;
  }

  public setFromAddres(address: string): void {
    this.state.fromAddress = address;
  }

  public setToZipCode(zipCode: string): void {
    this.state.toZipCode = zipCode;
  }

  public setFromZipCode(zipCode: string): void {
    this.state.fromZipCode = zipCode;
    this.setStrategy(zipCode);
  }

  public setMarks(marks: Marks[]): void {
    this.state.marks = marks;
  }

  @addMarks
  public ship(): string {
    return `Shipment id: ${this.getShipmentID()}, from: ${this.state.fromAddress}, to: ${
      this.state.toAddress
    }, cost: ${this.getTotalCost()}$`;
  }
}
