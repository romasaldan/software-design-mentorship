import { AbstractShipper } from './shipper-strategies/abstract-shipper';
import { Visitor } from './shipper-visitors/visitor';

export class Shipper {
  private shipper: AbstractShipper;
  constructor(shipper: AbstractShipper) {
    this.shipper = shipper;
  }

  public setShipper(shipper: AbstractShipper) {
    this.shipper = shipper;
  }

  public getCost(visitor: Visitor): number {
    return this.shipper.getCost(visitor);
  }
}
