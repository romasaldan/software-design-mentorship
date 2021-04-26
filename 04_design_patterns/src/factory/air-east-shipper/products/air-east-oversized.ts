import { SafeFloatService } from "../../../utils/safe-float.service";
import { Product } from "../../interfaces/product";

export class AirEastOversized implements Product {
  private safeFloatservice = new SafeFloatService();

  getCost(weight: number) {
    return this.safeFloatservice.add(this.safeFloatservice.multiply(weight, 0.25), 10)
  }
}