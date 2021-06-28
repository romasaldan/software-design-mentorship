import {AdjacencyMatrix} from '../src/graph-lib/AdjacencyMatrix';
import {CitiesGraph, WeightedGraphItem} from '../src/graph-lib/CitiesGraph';
import {Matrix} from '../src/utils/Matrix';

class TestGraph extends CitiesGraph {
    getNames() {
        return this.registeredNames;
    }

    getMatrix() {
        return this.matrix;
    }
}

const list: WeightedGraphItem[] = [
    {from: 'lviv', to: 'kyiv', weight: 1},
    {from: 'lviv', to: 'odesa', weight: 4},
    {from: 'kyiv', to: 'odesa', weight: 2},
    {from: 'kyiv', to: 'kharkiv', weight: 3},
    {from: 'odesa', to: 'kharkiv', weight: 5},
];

describe('CitiesGraph', () => {
    it('should form graph with names', () => {
        const graph = new TestGraph(list);

        expect(graph.getNames()).toEqual(['kharkiv', 'kyiv', 'lviv', 'odesa']);
    });

    it('should create adjacence matrix according to names', () => {
        const graph = new TestGraph(list);

        expect(graph.getMatrix()).toEqual(
            new AdjacencyMatrix(
                new Matrix([
                    [0, 3, 0, 5],
                    [3, 0, 1, 2],
                    [0, 1, 0, 4],
                    [5, 2, 4, 0],
                ])
            )
        );
    });

    it('should return shortest distances from lviv to other cities', () => {
        const graph = new TestGraph(list);

        expect(graph.getShortestDistancesFrom('lviv')).toEqual([4, 1, 0, 3]);
    });

    it('should return shortest path from kharkiv to lviv', () => {
        const graph = new TestGraph(list);

        expect(graph.getShortestPath('kharkiv', 'lviv')).toEqual(['kharkiv', 'kyiv', 'lviv']);
    });

    it('should return shortest path from odesa to lviv', () => {
        const graph = new TestGraph(list);

        expect(graph.getShortestPath('odesa', 'lviv')).toEqual(['odesa', 'kyiv', 'lviv']);
    });
});
