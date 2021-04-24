import { SafeFloatService } from '../utils/safe-float.service';
import { AbstractShipper } from '../shipper-strategies/abstract-shipper';
import { Visitor } from './visitor';

export class Letter implements Visitor {
  protected weight: number;
  private safeFloatServise: SafeFloatService = new SafeFloatService();

  constructor(weight: number) {
    this.weight = weight;
  }

  public visitAirEast(company: AbstractShipper) {
    return this.safeFloatServise.multiply(company.getLetterPricePerOunce(), this.weight);
  }

  public visitChigagoSprint(company: AbstractShipper) {
    return this.safeFloatServise.multiply(company.getLetterPricePerOunce(), this.weight);
  }

  public visitPacificParcel(company: AbstractShipper) {
    return this.safeFloatServise.multiply(company.getLetterPricePerOunce(), this.weight);
  }
}
