import {Point} from './point';
import {Shape} from './Shape';
export class Triangle extends Shape {
  private vertices: Point[];
  private decimalPresice = 3;
  constructor(v1: Point, v2: Point, v3: Point);
  constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean);

  constructor(v1, v2, v3, color?: string, filled?: boolean) {
    super([v1, v2, v3], color, filled);

    this.vertices = [v1, v2, v3];
  }

  toString() {
    const triangleDescription = this.vertices
      .map((point, i) => `v${i + 1}=${point}`)
      .join(',');

    return `Triangle[${triangleDescription}]`;
  }

  getType() {
    const distances = new Set(this.getDistancesWithPresice());

    switch (distances.size) {
      case 2:
        return 'isosceles triangle';
      case 1:
        return 'equilateral triangle';
      default:
        return 'scalene triangle';
    }
  }

  private getDistancesWithPresice() {
    return this.getAllDistances().map(
      (distance) =>
        Math.round(distance * 10 ** this.decimalPresice) /
        1000 ** this.decimalPresice
    );
  }
}
