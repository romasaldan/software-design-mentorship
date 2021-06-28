import {Matrix} from '../../src/utils/Matrix';
import {AdjacencyMatrix} from '../../src/graph-lib/AdjacencyMatrix';
import {dijkstra, printPath} from '../../src/graph-lib/dijkstra';

describe('dijkstra', () => {
    it('(graph 1.jpg) should get the shortest path from the first vertex', () => {
        const adjacencyMatrix = new AdjacencyMatrix();
        adjacencyMatrix
            .addVertexTimes(6)
            .addEdge(0, 1, 4)
            .addEdge(0, 2, 3)
            .addEdge(1, 2, 1)
            .addEdge(1, 3, 2)
            .addEdge(2, 3, 4)
            .addEdge(3, 4, 2)
            .addEdge(4, 5, 6);

        const {shortestDistances} = dijkstra(adjacencyMatrix, 0);
        const expectedResults = [0, 4, 3, 6, 8, 14];

        expectedResults.forEach((distance, index) => expect(distance).toBe(shortestDistances[index]));
    });

    it('(graph 1.jpg) should be received the shortest path from the first vertex to the requested', () => {
        const adjacencyMatrix = new AdjacencyMatrix();
        adjacencyMatrix
            .addVertexTimes(6)
            .addEdge(0, 1, 4)
            .addEdge(0, 2, 3)
            .addEdge(1, 2, 1)
            .addEdge(1, 3, 2)
            .addEdge(2, 3, 4)
            .addEdge(3, 4, 2)
            .addEdge(4, 5, 6);

        const {parentPath} = dijkstra(adjacencyMatrix, 0);
        const expectedResults = [[], [0], [0], [0, 1], [0, 1, 3], [0, 1, 3, 4]];

        expectedResults.forEach((path, i) => expect(printPath(i, parentPath).reverse()).toEqual(path));
    });

    it('(graph 2.jpg) should get the shortest from the first vertex with passed matrix', () => {
        const adjacencyMatrix = new AdjacencyMatrix(
            new Matrix<number>([
                [0, 1, 2, 0, 0, 0],
                [1, 0, 1, 3, 0, 0],
                [2, 1, 0, 4, 0, 0],
                [0, 3, 4, 0, 5, 6],
                [0, 0, 0, 5, 0, 2],
                [0, 0, 0, 6, 2, 0],
            ])
        );

        const {shortestDistances} = dijkstra(adjacencyMatrix, 0);
        const expectedResults = [0, 1, 2, 4, 9, 10];

        expectedResults.forEach((distance, index) => expect(distance).toBe(shortestDistances[index]));
    });

    it('(graph 2.jpg) should be received the shortest path from the first vertex to the requested with passed matrix', () => {
        const adjacencyMatrix = new AdjacencyMatrix(
            new Matrix<number>([
                [0, 1, 2, 0, 0, 0],
                [1, 0, 1, 3, 0, 0],
                [2, 1, 0, 4, 0, 0],
                [0, 3, 4, 0, 5, 6],
                [0, 0, 0, 5, 0, 2],
                [0, 0, 0, 6, 2, 0],
            ])
        );

        const {parentPath} = dijkstra(adjacencyMatrix, 0);
        const expectedResults = [[], [0], [0], [0, 1], [0, 1, 3], [0, 1, 3]];

        expectedResults.forEach((path, i) => expect(printPath(i, parentPath).reverse()).toEqual(path));
    });
});
