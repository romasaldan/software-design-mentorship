import {AdjacencyMatrix} from './AdjacencyMatrix';

export function dijkstra(adjacencyMatrix: AdjacencyMatrix, vertex: number) {
    const verticesAmount = adjacencyMatrix.getVerticesAmount();
    const shortestDistances: number[] = new Array(verticesAmount).fill(Number.MAX_SAFE_INTEGER, 0, verticesAmount);
    const added: boolean[] = new Array(verticesAmount).fill(false, 0, verticesAmount);
    const parentPath: number[] = [];
    shortestDistances[vertex] = 0;
    parentPath[vertex] = -1;

    for (let i = 1; i < verticesAmount; i++) {
        let shortestDistance = Number.MAX_SAFE_INTEGER;
        let nearest = -1;

        for (let vertexIndex = 0; vertexIndex < verticesAmount; vertexIndex++) {
            if (!added[vertexIndex] && shortestDistances[vertexIndex] < shortestDistance) {
                nearest = vertexIndex;
                shortestDistance = shortestDistances[vertexIndex];
            }
        }

        added[nearest] = true;

        for (let vertexIndex = 0; vertexIndex < verticesAmount; vertexIndex++) {
            let edgeDistance = adjacencyMatrix.getEdge(nearest, vertexIndex);

            if (edgeDistance > 0 && shortestDistance + edgeDistance < shortestDistances[vertexIndex]) {
                parentPath[vertexIndex] = nearest;
                shortestDistances[vertexIndex] = shortestDistance + edgeDistance;
            }
        }
    }

    return {shortestDistances, parentPath};
}

export function printPath(currentVertex: number, parents: number[], currentPath: number[] = []): number[] {
    if (currentVertex === -1) {
        return currentPath;
    } else {
        if (parents[currentVertex] !== -1) {
            currentPath.push(parents[currentVertex]);
        }

        return printPath(parents[currentVertex], parents, currentPath);
    }
}
