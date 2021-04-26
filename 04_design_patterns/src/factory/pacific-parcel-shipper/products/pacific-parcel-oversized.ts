import { SafeFloatService } from "../../../utils/safe-float.service";
import { Product } from "../../interfaces/product";

export class PacificParcelOversized implements Product {
  private safeFloatservice = new SafeFloatService();

  getCost(weight: number) {
    return this.safeFloatservice.multiply(weight, 0.21)
  }
}