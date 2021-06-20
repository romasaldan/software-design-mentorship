export class Matrix {
    protected elements: number[][];
    constructor(elements: number[][]) {
        this.elements = elements;
    }

    removeLines(i: number, j: number) {
        this.elements = this.elements
            .filter((row, rowIndex) => rowIndex !== i)
            .map((row) => row.filter((element, index) => index !== j));

        return this;
    }
}
