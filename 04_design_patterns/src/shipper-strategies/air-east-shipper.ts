import { Visitor } from '../shipper-visitors/visitor';
import { AbstractShipper } from './abstract-shipper';

export class AirEastShipper extends AbstractShipper {
  protected readonly LETTER_PRICE_PER_OUNCE = 0.39;
  protected readonly PACKAGE_PRICE_PER_OUNCE = 0.25;

  getCost(visitor: Visitor): number {
    return visitor.visitAirEast(this);
  }
}
