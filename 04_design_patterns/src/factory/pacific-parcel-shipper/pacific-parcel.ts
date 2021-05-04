import { ShipperFactory } from '../interfaces/shipper-factory';
import { PacificParcelLetter } from './products/pacific-parcel-letter';
import { PacificParcelOversized } from './products/pacific-parcel-oversized';
import { PacificParcelPackage } from './products/pacific-parcel-package';

export class PacificParcelShipper implements ShipperFactory {
  createLetter() {
    return new PacificParcelLetter();
  }

  createPackage() {
    return new PacificParcelPackage();
  }

  createOversized() {
    return new PacificParcelOversized();
  }
}
