import { IShipperCompany } from './shipper-company';

export class PacificParcelShipper implements IShipperCompany {
  getCost() {
    return 5;
  }
}
