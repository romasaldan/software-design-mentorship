import {Point} from './point';

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];
  private readonly MIN_NUMBER_OF_POINTS = 3;

  abstract getType(): string;

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);

  constructor(points: Point[], color = 'green', filled = true) {
    this.validateInputs(points);

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  private validateInputs(points: Point[]) {
    if (points.length < this.MIN_NUMBER_OF_POINTS) {
      throw Error('should be passed at least three points to form a shape');
    }
  }

  toString() {
    const pointsList = this.points.join(', ');
    const filledStatus = this.filled ? 'filled' : 'not filled';

    return `A Shape with color of ${this.color} and ${filledStatus}. Points: ${pointsList}.`;
  }

  public getPerimeter() {
    return this.getAllDistances().reduce((acc, distance) => acc + distance, 0);
  }

  protected getAllDistances(): number[] {
    return this.points.map((point, index) => {
      if (this.points.length - 1 === index) {
        return point.distance(this.points[0]);
      }

      return point.distance(this.points[index + 1]);
    });
  }
}
