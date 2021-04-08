import {SafeFloatService} from './SafeFloatService';

export class Point {
  public x: number;
  public y: number;
  private safeFloatService = new SafeFloatService();

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(other: Point): number;
  distance(x: number, y: number): number;
  distance(): number;

  distance(a?: Point | number, b?: number) {
    if (a instanceof Point) {
      return this.calculateDistanceToPoint(a);
    }

    if (typeof a === 'number') {
      return this.calculateDistanceToPoint(new Point(a, b));
    }

    return this.calculateDistanceToPoint(new Point());
  }

  private calculateDistanceToPoint(point: Point): number {
    return Math.sqrt(
      this.safeFloatService.add(
        this.safeFloatService.substract(this.x, point.x) ** 2,
        this.safeFloatService.substract(this.y, point.y) ** 2
      )
    );
  }
}
