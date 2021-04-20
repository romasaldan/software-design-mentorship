import { IShipperCompany } from './shipper-strategies/shipper-company';

export class Shipper {
  private shipper: IShipperCompany;
  constructor(shipper: IShipperCompany) {
    this.shipper = shipper;
  }

  public setShipper(shipper: IShipperCompany) {
    this.shipper = shipper;
  }

  getCost(): number {
    return this.shipper.getCost();
  }
}
