import { IShipperCompany } from './shipper-company';

export class ChigagoSprintShipper implements IShipperCompany {
  getCost() {
    return 3;
  }
}
