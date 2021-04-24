import { SafeFloatService } from '../utils/safe-float.service';
import { AbstractShipper } from '../shipper-strategies/abstract-shipper';
import { Visitor } from './visitor';

export class Oversized implements Visitor {
  protected weight: number;
  private safeFloatServise: SafeFloatService = new SafeFloatService();

  constructor(weight: number) {
    this.weight = weight;
  }

  public visitAirEast(company: AbstractShipper) {
    return this.safeFloatServise.add(
      this.safeFloatServise.multiply(company.getPackagePricePerOunce(), this.weight),
      10
    );
  }

  public visitChigagoSprint(company: AbstractShipper) {
    return this.safeFloatServise.multiply(company.getPackagePricePerOunce(), this.weight);
  }

  public visitPacificParcel(company: AbstractShipper) {
    return this.safeFloatServise.multiply(
      this.weight,
      this.safeFloatServise.add(company.getPackagePricePerOunce(), 0.02)
    );
  }
}
