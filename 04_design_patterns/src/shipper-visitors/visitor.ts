import { AbstractShipper } from '../shipper-strategies/abstract-shipper';

export interface Visitor {
  visitAirEast(company: AbstractShipper): number;
  visitChigagoSprint(company: AbstractShipper): number;
  visitPacificParcel(company: AbstractShipper): number;
}
