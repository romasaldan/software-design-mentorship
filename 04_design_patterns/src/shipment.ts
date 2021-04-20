import { State } from './client';
import { SafeFloatService } from './safe-float.service';
import { Shipper } from './shipper';
import { AirEastShipper } from './shipper-strategies/air-east-shipper';
import { ChigagoSprintShipper } from './shipper-strategies/chigago-sprint-shipper';
import { PacificParcelShipper } from './shipper-strategies/pacific-parcel-shipper';

export class Shipment {
  private static shipmentAmount = 0;
  public state: State;
  private shipper: Shipper;
  private safeFloatServise: SafeFloatService = new SafeFloatService();

  constructor(state: State) {
    this.state = state;

    if (['7', '8', '9'].includes(state.fromZipCode[0])) {
      this.shipper = new Shipper(new PacificParcelShipper());
    } else if (['4', '5', '6'].includes(state.fromZipCode[0])) {
      this.shipper = new Shipper(new ChigagoSprintShipper());
    } else {
      this.shipper = new Shipper(new AirEastShipper());
    }
  }

  public getShipmentID(): string {
    Shipment.shipmentAmount++;
    return String(Shipment.shipmentAmount);
  }

  private getTotalCost(): number {
    return this.safeFloatServise.multiply(this.state.weight, this.shipper.getCost());
  }

  public ship(): string {
    return `Shipment id: ${this.getShipmentID()}, from: ${this.state.fromAddress}, to: ${
      this.state.toAddress
    }, cost: ${this.getTotalCost()}$`;
  }
}
