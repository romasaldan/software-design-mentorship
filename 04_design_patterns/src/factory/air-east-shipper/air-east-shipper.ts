import { ShipperFactory } from "../interfaces/shipper-factory";
import { AirEastLetter } from "./products/air-east-letter";
import { AirEastOversized } from "./products/air-east-oversized";
import { AirEastPackage } from "./products/air-east-package";

export class AirEastShipper implements ShipperFactory {
  createLetter() {
    return new AirEastLetter()
  }

  createPackage() {
    return new AirEastPackage()
  }

  createOversized() {
    return new AirEastOversized()
  }
}