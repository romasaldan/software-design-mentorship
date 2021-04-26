import { SafeFloatService } from "../../../utils/safe-float.service";
import { Product } from "../../interfaces/product";

export class AirEastLetter implements Product {
  private safeFloatservice = new SafeFloatService();

  getCost(weight: number) {
    return this.safeFloatservice.multiply(0.39, weight)
  }
}