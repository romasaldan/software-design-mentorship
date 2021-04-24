import { Visitor } from '../shipper-visitors/visitor';

export abstract class AbstractShipper {
  protected abstract readonly LETTER_PRICE_PER_OUNCE: number;
  protected abstract readonly PACKAGE_PRICE_PER_OUNCE: number;
  abstract getCost(visitor: Visitor): number;

  public getLetterPricePerOunce(): number {
    return this.LETTER_PRICE_PER_OUNCE;
  }

  public getPackagePricePerOunce(): number {
    return this.PACKAGE_PRICE_PER_OUNCE;
  }
}
