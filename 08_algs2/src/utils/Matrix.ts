export class Matrix<T> {
    protected elements: T[][];
    constructor(elements: T[][]) {
        this.elements = elements;
    }

    getRowsAmount(): number {
        return this.elements.length;
    }

    getColumnsAmount(row: number = 0): number {
        return this.elements[row].length;
    }

    removeRow(i: number) {
        this.elements = this.elements.filter((_, rowIndex) => rowIndex !== i);

        return this;
    }

    removeColumn(i: number) {
        this.elements = this.elements.map((row) => row.filter((_, index) => index !== i));

        return this;
    }

    removeLines(i: number, j: number) {
        return this.removeRow(i).removeColumn(j);
    }

    changeElem(row: number, column: number, elem: T) {
        this.elements[row][column] = elem;

        return this;
    }

    addRow(values: T[]) {
        if (values.length !== this.getColumnsAmount()) {
            throw Error('wrong number of values');
        }

        this.elements[this.getRowsAmount()] = new Array(this.getColumnsAmount())
            .fill(null, 0, this.getColumnsAmount())
            .map((_el, i) => values[i]);

        return this;
    }

    addColumn(values: T[]) {
        if (values.length !== this.getRowsAmount()) {
            throw Error('wrong number of values');
        }

        this.elements = this.elements.map((row, index) => {
            row[this.getColumnsAmount(index)] = values[index];

            return row;
        });

        return this;
    }

    getElement(i: number, j: number): T {
        return this.elements[i][j];
    }

    print() {
        const matrixLatex = this.elements.map((row) => row.join(' & ')).join(`\\\\`);

        return `<img src="https://latex.codecogs.com/gif.latex?A = \\begin{pmatrix}${matrixLatex}\\end{pmatrix}" title="Saldan Roman" />`;
    }
}
