import { Product } from "./product";

export interface ShipperFactory {
  createLetter(): Product
  createPackage(): Product
  createOversized(): Product
}
