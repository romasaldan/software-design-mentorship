import {Matrix} from '../utils/Matrix';

export class AdjacencyMatrix {
    protected matrix: Matrix<number>;

    constructor(matrix?: Matrix<number>) {
        this.matrix = matrix ? matrix : new Matrix<number>([[0]]);
    }

    addVertex() {
        const rowValues = new Array(this.matrix.getColumnsAmount()).fill(0, 0, this.matrix.getColumnsAmount());
        this.matrix.addRow(rowValues);
        const columnValues = new Array(this.matrix.getRowsAmount()).fill(0, 0, this.matrix.getRowsAmount());
        this.matrix.addColumn(columnValues);

        return this;
    }

    addVertexTimes(times: number) {
        for (let i = 0; i < times; i++) {
            this.addVertex();
        }

        return this;
    }

    removeVertex(i: number) {
        if (i < 0 || i > this.matrix.getRowsAmount() - 1) {
            throw Error('vertex does not exist');
        } else {
            this.matrix.removeLines(i, i);
        }

        return this;
    }

    addEdge(i: number, j: number, weight: number) {
        if (i === j) {
            throw Error('the same vertex');
        } else if (i > this.matrix.getRowsAmount() - 1 || j > this.matrix.getColumnsAmount() - 1) {
            throw Error('vertex does not exist');
        }

        this.matrix.changeElem(i, j, weight);
        this.matrix.changeElem(j, i, weight);

        return this;
    }

    removeEdge(i: number, j: number) {
        this.matrix.changeElem(i, j, 0);
        this.matrix.changeElem(j, i, 0);

        return this;
    }

    getEdge(i: number, j: number) {
        return this.matrix.getElement(i, j);
    }

    getVerticesAmount() {
        return this.matrix.getColumnsAmount();
    }

    print() {
        return this.matrix.print();
    }
}
