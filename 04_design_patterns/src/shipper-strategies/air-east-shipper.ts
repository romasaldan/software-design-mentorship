import { IShipperCompany } from './shipper-company';

export class AirEastShipper implements IShipperCompany {
  getCost() {
    return 0.39;
  }
}
