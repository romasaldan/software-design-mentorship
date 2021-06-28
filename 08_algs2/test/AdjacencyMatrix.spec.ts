import {Matrix} from '../src/utils/Matrix';
import {AdjacencyMatrix} from '../src/graph-lib/AdjacencyMatrix';
import {dijkstra} from '../src/graph-lib/dijkstra';

class TestMatrix extends AdjacencyMatrix {
    getMatrix() {
        return this.matrix;
    }
}

let adjacencyMatrix: TestMatrix;

beforeEach(() => {
    adjacencyMatrix = new TestMatrix();
    adjacencyMatrix.addVertex().addVertex();
});

describe('AdjacencyMatrix', () => {
    it('should add vertex', () => {
        expect(adjacencyMatrix.getMatrix()).toEqual(
            new Matrix<number>([
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ])
        );
    });

    it('should add edge', () => {
        adjacencyMatrix.addEdge(0, 1, 5);

        expect(adjacencyMatrix.getMatrix()).toEqual(
            new Matrix<number>([
                [0, 5, 0],
                [5, 0, 0],
                [0, 0, 0],
            ])
        );
    });

    it('should add edge', () => {
        adjacencyMatrix.addEdge(0, 2, 5);

        expect(adjacencyMatrix.getMatrix()).toEqual(
            new Matrix<number>([
                [0, 0, 5],
                [0, 0, 0],
                [5, 0, 0],
            ])
        );
    });

    it('should remove vertex', () => {
        adjacencyMatrix.addEdge(0, 1, 5).removeVertex(2);

        expect(adjacencyMatrix.getMatrix()).toEqual(
            new Matrix<number>([
                [0, 5],
                [5, 0],
            ])
        );
    });

    it('should remove edge', () => {
        adjacencyMatrix.addEdge(0, 1, 5).addEdge(0, 2, 3).removeEdge(1, 0);

        expect(adjacencyMatrix.getMatrix()).toEqual(
            new Matrix<number>([
                [0, 0, 3],
                [0, 0, 0],
                [3, 0, 0],
            ])
        );
    });
});
