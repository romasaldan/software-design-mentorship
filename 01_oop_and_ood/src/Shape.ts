import {Point} from './point';

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  private _points: Point[];
  abstract getType(): string;

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);

  constructor(points: Point[], color = 'green', filled = true) {
    if (points.length < 3) {
      throw Error('should be passed at least three points to form a shape');
    }

    this._points = points;
    this.color = color;
    this.filled = filled;
  }

  toString() {
    const pointsList = this._points.join(', ');
    const filledStatus = this.filled ? 'filled' : 'not filled';

    return `A Shape with color of ${this.color} and ${filledStatus}. Points: ${pointsList}.`;
  }

  public getPerimeter() {
    return this.getAllDistances().reduce((acc, distance) => acc + distance, 0);
  }

  protected getAllDistances(): number[] {
    return this._points.map((point, index) => {
      if (this._points.length - 1 === index) {
        return point.distance(this._points[0]);
      }

      return point.distance(this._points[index + 1]);
    });
  }
}
