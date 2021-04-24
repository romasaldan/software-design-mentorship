import { Visitor } from '../shipper-visitors/visitor';
import { AbstractShipper } from './abstract-shipper';

export class ChigagoSprintShipper extends AbstractShipper {
  protected readonly LETTER_PRICE_PER_OUNCE = 0.42;
  protected readonly PACKAGE_PRICE_PER_OUNCE = 0.2;

  public getCost(visitor: Visitor): number {
    return visitor.visitChigagoSprint(this);
  }
}
