import {Matrix} from '../src/utils/Matrix';

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

    it('should count number of columns and rows', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        expect(matrix.getColumnsAmount()).toEqual(3);
        expect(matrix.getRowsAmount()).toEqual(2);
    });

    it('should add a row and populate with values', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        expect(matrix.addRow([7, 8, 9])).toEqual(
            new Matrix([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        );
    });

    it('should add a row and populate with values', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        expect(matrix.addColumn([7, 8])).toEqual(
            new Matrix([
                [1, 2, 3, 7],
                [4, 5, 6, 8],
            ])
        );
    });

    it('should throw an Error when wrong number of values passed', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        expect(() => matrix.addRow([7, 2])).toThrow('wrong number of values');
        expect(() => matrix.addColumn([7, 6, 7])).toThrow('wrong number of values');
    });
});
