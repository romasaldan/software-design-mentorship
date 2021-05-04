import { ShipperFactory } from '../interfaces/shipper-factory';
import { ChigacoSprintLetter } from './products/chigaco-sprint-letter';
import { ChigagoSprintOversized } from './products/chigaco-sprint-oversized';
import { ChigagoSprintPackage } from './products/chigaco-sprint-package';

export class ChigagoSprintShipper implements ShipperFactory {
  createLetter() {
    return new ChigacoSprintLetter();
  }

  createPackage() {
    return new ChigagoSprintPackage();
  }

  createOversized() {
    return new ChigagoSprintOversized();
  }
}
