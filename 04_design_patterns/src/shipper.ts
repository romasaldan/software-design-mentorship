import { IShipperCompany } from './shipper-strategies/shipper-company';

export class Shipper {
  _shipper: IShipperCompany;
  constructor(shipper: IShipperCompany) {
    this._shipper = shipper;
  }

  set shipper(shipper: IShipperCompany) {
    this._shipper = shipper;
  }

  getCost(): number {
    return 5;
  }
}
