import {SafeFloat} from './SafeFloat';

export class Point {
  public x: number;
  public y: number;
  private safeFloat: SafeFloat;

  constructor();
  constructor(x: number, y: number);
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.safeFloat = new SafeFloat();
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(): number;

  distance(a?: Point | number, b?: number) {
    if (a instanceof Point) {
      return this.calculateDistanceBetweenPoints(a, this);
    }

    if (typeof a === 'number' && typeof a === 'number') {
      return this.calculateDistanceBetweenPoints(this, new Point(a, b));
    }

    return this.calculateDistanceBetweenPoints(this, new Point());
  }

  private calculateDistanceBetweenPoints(
    firstCoor: Point,
    secondCoor: Point
  ): number {
    return Math.sqrt(
      this.safeFloat.add(
        this.safeFloat.substract(firstCoor.x, secondCoor.x) ** 2,
        this.safeFloat.substract(firstCoor.y, secondCoor.y) ** 2
      )
    );
  }
}
