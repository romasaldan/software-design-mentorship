import { SafeFloatService } from '../utils/safe-float.service';

export abstract class Product {
  protected safeFloatservice = new SafeFloatService();
  protected abstract readonly PRICE_PER_OUNCE: number;

  getCost(weight: number) {
    return this.safeFloatservice.multiply(weight, this.PRICE_PER_OUNCE);
  }
}
