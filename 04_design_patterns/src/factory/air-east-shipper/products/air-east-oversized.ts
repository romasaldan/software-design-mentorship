import { Product } from '../../product';

export class AirEastOversized extends Product {
  protected PRICE_PER_OUNCE = 0.25;

  getCost(weight: number) {
    return this.safeFloatservice.add(super.getCost(weight), 10);
  }
}
