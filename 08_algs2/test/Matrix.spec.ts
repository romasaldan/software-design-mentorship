import {Matrix} from '../src/Matrix';

describe('Matrix', () => {
    it('should be removed passed lines from a matrix', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);

        expect(matrix.removeLines(1, 1)).toEqual(
            new Matrix([
                [1, 3],
                [7, 9],
            ])
        );
    });
});
