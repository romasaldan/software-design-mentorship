import { State } from './client';
import { SafeFloatService } from './safe-float.service';
import { Shipper } from './shipper';

export class Shipment {
  private static shipmentAmount = 0;
  private readonly OUNCE_PRICE = 0.39;
  public state: State;
  private safeFloatServise: SafeFloatService = new SafeFloatService();

  constructor(state: State) {
    this.state = state;
  }

  public getShipmentID(): string {
    Shipment.shipmentAmount++;
    return String(Shipment.shipmentAmount);
  }

  private getCost(): number {
    return this.safeFloatServise.multiply(this.state.weight, this.OUNCE_PRICE);
  }

  public ship(): string {
    return `Shipment id: ${this.getShipmentID()}, from: ${this.state.fromAddress}, to: ${
      this.state.toAddress
    }, cost: ${this.getCost()}$`;
  }
}
