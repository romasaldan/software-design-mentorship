import { Visitor } from '../shipper-visitors/visitor';
import { AbstractShipper } from './abstract-shipper';

export class PacificParcelShipper extends AbstractShipper {
  protected readonly LETTER_PRICE_PER_OUNCE = 0.51;
  protected readonly PACKAGE_PRICE_PER_OUNCE = 0.19;

  public getCost(visitor: Visitor): number {
    return visitor.visitPacificParcel(this);
  }
}
