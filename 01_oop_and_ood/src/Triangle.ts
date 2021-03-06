import {Point} from './Point';
import {Shape} from './Shape';

export class Triangle extends Shape {
    private readonly DECIMAL_PRECISION = 3;

    constructor(v1: Point, v2: Point, v3: Point);
    constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean);

    constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
        super([v1, v2, v3], color, filled);
    }

    toString() {
        const triangleDescription = this.points.map((point, i) => `v${i + 1}=${point}`).join(',');

        return `Triangle[${triangleDescription}]`;
    }

    getType() {
        const distances = new Set(this.getDistancesWithPresice());

        switch (distances.size) {
            case 1:
                return 'equilateral triangle';
            case 2:
                return 'isosceles triangle';
            case 3:
                return 'scalene triangle';
            default:
                throw Error(
                    'something wrong with your code, the number of distances can not be more than three for a triangle'
                );
        }
    }

    private getDistancesWithPresice() {
        return this.getAllDistances().map(
            (distance) => Math.round(distance * 10 ** this.DECIMAL_PRECISION) / 1000 ** this.DECIMAL_PRECISION
        );
    }
}
